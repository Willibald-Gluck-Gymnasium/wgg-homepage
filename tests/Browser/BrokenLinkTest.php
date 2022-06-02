<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Illuminate\Support\Str;

class BrokenLinkTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testBrokenLinks()
    {
        $visitedPages = collect([]);

        $self = $this;

        function crawlPage($self, $link, $visitedPages) {
            $self->browse(function (Browser $browser) use($self, $link, $visitedPages) {

                $browser->visit($link);

                // stop crawling when current page was already visited, else push to list
                $currentUrl = $browser->driver->getCurrentURL();
                if ($visitedPages->contains($currentUrl)) {
                    return;
                }
                $visitedPages->push($currentUrl);

                fwrite(STDERR, print_r($visitedPages, TRUE));
                fwrite(STDERR, print_r("\n", TRUE));

                $browser->screenshot( Str::random() );

                // crawl links and recursively call crawl function crawlPage()
                $links = collect($browser->elements('a[href]'));

                if ($links->has([2])) {
                    $link = $links[2];
                } else {
                    return;
                }

                try {
                    $href = $link->getAttribute('href');
                } catch (\Throwable $th) {
                    fwrite(STDERR, print_r($th->getMessage(), TRUE));
                    fwrite(STDERR, print_r("\n", TRUE));
                    return;
                }
                crawlPage($self, $href, $visitedPages);


                if ($links->has([3])) {
                    $link = $links[3];
                } else {
                    return;
                }

                try {
                    $href = $link->getAttribute('href');
                } catch (\Throwable $th) {
                    fwrite(STDERR, print_r($th->getMessage(), TRUE));
                    fwrite(STDERR, print_r("\n", TRUE));
                    return;
                }
                crawlPage($self, $href, $visitedPages);


                // $links->each(function ($link) use($self, $browser, $visitedPages){
                //     fwrite(STDERR, print_r($link, TRUE));
                //     fwrite(STDERR, print_r("\n", TRUE));

                //     try {
                //         $href = $link->getAttribute('href');    
                //     } catch (\Throwable $th) {
                //         fwrite(STDERR, print_r($th->getMessage(), TRUE));
                //         fwrite(STDERR, print_r("\n", TRUE));
                //         return;
                //     }
                //     $href = "/";
                //     crawlPage($self, $href, $visitedPages);
                // });

            });
        }

        crawlPage($this, '/', $visitedPages);

        dd($visitedPages);

        // $this->browse(function (Browser $browser) use($visitedPages) {
        //     $browser->visit('/');
            // $links = $browser->elements('a[href]');
            // collect($links)->each(function ($link) use($visitedPages){
            //     $href = $link->getAttribute('href');
            //     $visitedPages->push($href);
            // });
        //     dd($visitedPages);
        // });
    }
}
