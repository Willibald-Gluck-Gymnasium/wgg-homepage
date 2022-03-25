<?php

namespace App\Models;

use \Orbit\Concerns\Orbital;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Laravel\Scout\Searchable;

class ScoutPost extends Model
{
    use Orbital;
    use Searchable;

    protected $guarded = [];

    protected $keyType = 'string';

    public static function schema(Blueprint $table)
    {
        // $table->id('id');
        $table->string('link');
        $table->string('title');
        $table->string('content');
    }

    public function getKeyName()
    {
        return 'link';
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getScoutKey()
    {
        return $this->link;
    }
 
    public function getScoutKeyName()
    {
        return 'link';
    }
}

ScoutPost::create([
    'link' => 'scout-post-one',
    'title' => 'Scout post one',
    'content' => 'Post one',
]);

ScoutPost::create([
    'link' => 'scout-post-two',
    'title' => 'Scout post two',
    'content' => 'Post two',
]);