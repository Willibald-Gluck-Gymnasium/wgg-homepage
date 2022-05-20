<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Article;

class listAllTags extends Command
{


    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'articles:listAllTags';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This goes through all articles and lists every Tag';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $articles = Article::select('tags')->get();

        $allTags = [];

        $articles->each(function ($item) use(&$allTags){

            collect($item['tags'])->each(function ($item) use(&$allTags){

                array_push($allTags, $item);
            });
        });

        $allTagsToString = collect($allTags)->unique()->sort()->implode("\n");

        $this->info($allTagsToString);
        

        return 0;
    }
}
