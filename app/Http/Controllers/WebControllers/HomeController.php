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

        $cardCollection = Article::select('title', 'link', 'category', 'author', 'thumbnail', 'published_on')
            // ->whereIn('link', $titles)
            ->get();

        $cards = $cardCollection->map(function ($item, $key) {
            $item['thumbnail'] = "!!getFromImageModule!!".$item['thumbnail'];
            return $item;
        })->toArray();

        $slideCollection = Article::select('title', 'link', 'category', 'thumbnail_slide', 'published_on')
            // ->orderBy('published_on', 'desc')
            ->inRandomOrder()
            ->take(4)
            ->get();

        $slides = $slideCollection->map(function ($item, $key) {
            $item['thumbnail_slide'] = '!!getFromImageModule!!'.$item['thumbnail_slide'];
            return $item;
        })->toArray();

        // dd($slides);

        return Inertia::render('Home', [
            'cards' => $cards,
            'slides' => $slides
        ]);
    }
}
