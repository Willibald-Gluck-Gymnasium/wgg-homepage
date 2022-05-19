<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Article;


class ArticleTagTest extends TestCase
{
    // All tags used in articles must be included in this list, else the test will fail
    private $allowedTags = [
        'Allgemein',
        'Elternbrief',
        'Events',
        'Gemeinschaft',
        'Neuigkeiten',
        'Schülergenossenschaft',
        'Unterricht',
        'Verein der Freunde',
        'dev-only',

        // Fächer
        'Spanisch',
        'Sport',
        'Kunst',
        'Mathematik',
        'Englisch',
    ];

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_allTagsAreAllowed()
    {
        $articles = Article::select('tags')->get();

        $allTags = [];

        $articles->each(function ($item) use(&$allTags){

            collect($item['tags'])->each(function ($item) use(&$allTags){

                array_push($allTags, $item);
            });
        });

        $allTags = collect($allTags)->unique()->toArray();

        $this->assertEqualsCanonicalizing($this->allowedTags, $allTags);
        
    }
}
