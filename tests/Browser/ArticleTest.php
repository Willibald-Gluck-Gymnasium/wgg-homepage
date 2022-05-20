<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

use App\Models\Article;

class ArticleTest extends DuskTestCase
{
    /**
     * Test if the articles have any compile error like missing endtags or 
     * unknown components
     *
     * @return void
     */
    public function testIfAllArticlesCompileCorrectly()
    {
        $articles = Article::all();

        $articles->each(function ($item) {
            
            $this->browse(function (Browser $browser) use($item){
                $browser->visit($item->link)
                        ->assertSee($item->title);

                $consoleLog = collect($browser->driver->manage()->getLog('browser'));

                if ($consoleLog->isEmpty()) {
                    $errorMessage = "N/A";
                } {
                    $errorMessage = "Konsolen Fehler in Artikel ".
                    "\e[1;33m".$item->link."\e[0m".":".
                    "\n\n".
                    "\e[1;37;41m".$consoleLog->implode('message', ',')."\e[0m\n";
                }

                $this->assertEmpty(
                    $consoleLog,
                    $errorMessage
                );
            });
        });
       
    }

    /**
     * Test if all articles get passed the correct content values
     *
     * @return void
     */
    // public function testIfAllArticlesContainCorrectContent()
    // {
    //     $articles = Article::all();

    //     $articles->each(function ($item) {
    //         fwrite(STDERR, print_r($item->link."\n", TRUE));
    //         $this->browse(function (Browser $browser) use($item){
    //             $browser->visit($item->link)
    //                     ->assertVue('content', $item->content, '@article-component');
    //                     // ->assertSee($item->plaintext());
    //         });
    //     });
       
    // }
}
