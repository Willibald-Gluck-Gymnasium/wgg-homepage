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
            $data = Article::search($request->searc)->raw();

        } else {
            $data->select(
                'title',
                'link',
                'author',
                'published_on'
            )->simplePaginate(15);
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
