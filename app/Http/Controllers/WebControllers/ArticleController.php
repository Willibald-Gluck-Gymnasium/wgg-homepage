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
     * Index the articles.
     *
     */
    public function index($tag = false)
    {   
        if ($tag != false) {
            $tag_full_word = '"'.$tag.'"';
            $articles = Article::select('link', 'title', 'thumbnail', 'tags', 'published_on')->where('tags', 'like', "%{$tag_full_word}%")->get();
            
            if ($articles->isEmpty()) {
                abort(404);
            }

            // Correct spelling by finding version in DB
            $tags = collect($articles->first()->tags);
            $tag = $tags->filter(function ($item) use(&$tag){
                return strtolower($item) == strtolower($tag);
            })->first();

        } else {
            $articles = Article::all();
        }

        $articles = $articles->map(function ($item, $key) {
            $item['thumbnail'] = "!!getImageByName!!".$item['thumbnail'];
            return $item;
        });

        return Inertia::render('ArticleIndex', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'tag' => $tag,
            'cards' => $articles
        ]);
    }

    /**
     * Show the article.
     *
     * @param Article $article
     * @return \Illuminate\View\View
     */
    public function show(Article $article)
    {
        $tag_full_word = '"'.$article->tags[0].'"';
        $read_more = Article::select('title', 'link', 'tags', 'thumbnail', 'published_on')
            // ->orderBy('published_on', 'desc')
            ->where('tags', 'like', "%{$tag_full_word}%")
            ->orderBy('published_on', 'desc')
            ->take(5)
            ->get();
        return Inertia::render('Article', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'content' => $article->content,
            'title' => $article->title,
            'category' => $article->tags[0],
            'author' => $article->author,
            'publishedAt' => $article->published_on,
            'readTime' => $article->read_time(),
            'readMore' => $read_more
        ]);

    }
}
