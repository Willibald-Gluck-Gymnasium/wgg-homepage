<?php

namespace App\Http\Controllers\APIControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Article;

class ArticleController extends Controller
{
    /**
     * Index the article.
     *
     */
    public function index(Request $request)
    {   
        if (isset($request->search)) {
            $data = Article::search($request->search)->paginate(15);

            $data = $data->toArray();

            $data['data'] = collect($data['data'])->map(function ($item, $key) {
                return [
                    'title' => $item['title'],
                    'link' => $item['link'],
                    'category' => $item['category'],
                    'author' => $item['author'],
                    'published_on' => $item['published_on']
                ];
            })->toArray();

        } else {
            $data = Article::select(
                'title',
                'link',
                'category',
                'author',
                'published_on'
            )->paginate(15);
        }

        return [
            'status' => 'success',
            'data' => $data
        ];
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
