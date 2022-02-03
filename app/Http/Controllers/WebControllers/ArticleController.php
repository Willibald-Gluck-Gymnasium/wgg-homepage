<?php

namespace App\Http\Controllers\WebControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
        // view('article', [
        //     'title' => $article->title,
        //     'author' => $article->author,
        //     'published_at' => $article->published_at,
        //     'content' => $article->content
        // ]);

        return Inertia::render('Article', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'content' => $article->content,
            'title' => $article->title,
            'author' => $article->author,
            'publishedAt' => $article->published_at,
            'readTime' => $article->read_time()
        ]);

    }
}
