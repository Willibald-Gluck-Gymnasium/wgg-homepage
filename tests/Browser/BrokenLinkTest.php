<?php

namespace Tests\Browser;

use App\Models\Page;
use Facebook\WebDriver\WebDriverBy;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class BrokenLinkTest extends DuskTestCase
{
    public function setUp(): void{
        parent::setUp();
        $this->artisan('migrate:fresh');
    }

    /** @test */
    public function urlSpider()
    {

        $startingLink = Page::create([
            'url' => env('APP_URL'),
            'isCrawled' => false,
        ]);

        $this->browse(function (Browser $browser) use ($startingLink) {
            $this->getLinks($browser, $startingLink);
        });
    }

    protected function getLinks(Browser $browser, $currentUrl){

        $this->processCurrentUrl($browser, $currentUrl);


        try{

            foreach(Page::where('isCrawled', false)->get() as $link) {
                $this->getLinks($browser, $link);
            }


        }catch(Exception $e){

        }
    }

    protected function processCurrentUrl(Browser $browser, $currentUrl){

        //Check if already crawled
        if(Page::where('url', $currentUrl->url)->first()->isCrawled == true)
            return;

        //Visit URL
        $browser->visit($currentUrl->url);

        //Get Links and Save to DB if Valid
        // $linkElements = $browser->driver->findElements(WebDriverBy::tagName('a'));
        $linkElements = $browser->elements('a[href]');

        foreach($linkElements as $element){
            $href = $element->getAttribute('href');
            $href = $this->trimUrl($href);
            if($this->isValidUrl($href)){
                //var_dump($href);
                Page::create([
                    'url' => $href,
                    'isCrawled' => false,
                ]);
            }
        }

        //Update current url status to crawled
        $currentUrl->isCrawled = true;
        $currentUrl->status  = $this->getHttpStatus($currentUrl->url);
        $currentUrl->title = $browser->driver->getTitle();
        $currentUrl->save();
    }


    protected function isValidUrl($url){
        $parsed_url = parse_url($url);

        

        if(isset($parsed_url['host'])){
            if(strpos($parsed_url['host'], parse_url(env('APP_URL'))['host'] ) !== false && !Page::where('url', $url)->exists()){
                fwrite(STDERR, print_r($url, TRUE));
                fwrite(STDERR, print_r("\n", TRUE));
                fwrite(STDERR, print_r('true', TRUE));
                fwrite(STDERR, print_r("\n", TRUE));
                return true;
            }
            if(strpos($url, 'https://') !== false && strpos($url, 'http://') !== false && !Page::where('url', $url)->exists()) {
                fwrite(STDERR, print_r($url, TRUE));
                fwrite(STDERR, print_r("\n", TRUE));
                fwrite(STDERR, print_r('true', TRUE));
                fwrite(STDERR, print_r("\n", TRUE));
                return true;
            }
        }
        // fwrite(STDERR, print_r('false', TRUE));
        // fwrite(STDERR, print_r("\n", TRUE));
        return false;
    }

    protected function trimUrl($url){
        $url = strtok($url, '#');
        $url = rtrim($url,"/");
        return $url;
    }

    protected function getHttpStatus($url){
        $headers = get_headers($url, 1);
        return intval(substr($headers[0], 9, 3));
    }
}