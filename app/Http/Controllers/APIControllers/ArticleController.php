<?php

namespace App\Http\Controllers\APIControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Article;

class ArticleController extends Controller
{
    /**
     * Index the articles.
     *
     */
    public function index(Request $request)
    {   
        define('ITEMS_PER_PAGE', 15);

        if (isset($request->search)) {

            $data = Article::search($request->search)
                        ->paginate(ITEMS_PER_PAGE)
                        ->withQueryString();
                        // ->appends(['search' => $request->search]);

            $data = $data->toArray();

            $data['data'] = collect($data['data'])->map(function ($item, $key) {
                return [
                    'title' => $item['title'],
                    'link' => $item['link'],
                    'tags' => $item['tags'],
                    'category' => $item['category'],
                    'author' => $item['author'],
                    'published_on' => $item['published_on']
                ];
            })->toArray();

        } else if (isset($request->tag)) {
            $tag = '"'.$request->tag.'"';
            $data = Article::where('tags', 'like', "%{$tag}%")->paginate(ITEMS_PER_PAGE)->withQueryString();
            
            $data = $data->toArray();

            $data['data'] = collect($data['data'])->map(function ($item, $key) {
                return [
                    'title' => $item['title'],
                    'link' => $item['link'],
                    'tags' => $item['tags'],
                    'category' => $item['category'],
                    'author' => $item['author'],
                    'published_on' => $item['published_on']
                ];
            })->toArray();

        } else {
            $data = Article::select(
                'title',
                'link',
                'tags',
                'author',
                'published_on'
            )->paginate(ITEMS_PER_PAGE)->withQueryString()->toArray();
        }

        return ['status' => 'sucess'] + $data;
    }

    /**
     * Show the article.
     *
     * @param Article $article
     */
    public function show(Article $article, Request $request)
    {
        $data = [
            'title' => $article->title,
            'link' => $article->link,
            'author' => $article->author,
            'published_on' => $article->published_on,
            'content' => $article->content,
            'plaintext' => $article->plaintext()
        ];

        return [
            'status' => 'success',
            'data' => $data
        ];
    }
}
