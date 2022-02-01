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
     * @param Article $article
     * @return \Illuminate\View\View
     */
    public function index()
    {   
        // $articles = Article::all();

        $data = Article::select(
            'title',
            'link',
            'author',
            'published_at'
        )->simplePaginate(15);

        return [
            'status' => 'success',
            'data' => $data
        ];
    }

    /**
     * Show the article.
     *
     * @param Article $article
     * @return \Illuminate\View\View
     */
    public function show(Article $article, Request $request)
    {
        $data = [
            'title' => $article->title,
            'link' => $article->link,
            'author' => $article->author,
            'published_at' => $article->published_at,
            'content' => $article->content,
            'plaintext' => $article->plaintext
        ];

        return [
            'status' => 'success',
            'data' => $data
        ];
    }
}
