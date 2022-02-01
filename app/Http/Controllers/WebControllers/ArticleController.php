<?php

namespace App\Http\Controllers\WebControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Article;

class ArticleController extends Controller
{
    /**
     * Show the article.
     *
     * @param Article $article
     * @return \Illuminate\View\View
     */
    public function show(Article $article, Request $request)
    {
        return view('article', [
            'title' => $article->title,
            'author' => $article->author,
            'published_at' => $article->published_at,
            'content' => $article->content
        ]);
    }
}
