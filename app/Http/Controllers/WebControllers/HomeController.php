<?php

namespace App\Http\Controllers\WebControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Article;

class HomeController extends Controller
{
    /**
     * Index 
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {   
        $titles = [
            'corona-sicherheit',
            'example'
        ];

        $articleCollection = Article::select('title', 'link', 'category', 'author', 'thumbnail', 'published_on')
            // ->whereIn('link', $titles)
            ->get();

        $articles = $articleCollection->map(function ($item, $key) {
            $item['thumbnail'] = "!!getFromImageModule!!".$item['thumbnail'];
            return $item;
        })->toArray();

        return Inertia::render('Home', [
            'cards' => $articles,
        ]);
    }
}
