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
        //     'published_on' => $article->published_on,
        //     'content' => $article->content
        // ]);

        return Inertia::render('Article', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'content' => $article->content,
            'title' => $article->title,
            'category' => $article->category,
            'author' => $article->author,
            'publishedAt' => $article->published_on,
            'readTime' => $article->read_time()
        ]);

    }
}
