<?php

namespace App\Models;

use Illuminate\Support\Str;

// Respurces:
// https://laravel.com/docs/8.x/eloquent

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use \Soundasleep\Html2Text;
use \Orbit\Concerns\Orbital;
use Laravel\Scout\Searchable;
use \Mtownsend\ReadTime\ReadTime;


class Article extends Model
{
    use Orbital, Searchable;

    protected $fillable = [
        'title',
        'link',
        'category',
        'author',
        'published_on',
        'thumbnail',
        'thumbnail_slide'
    ];

    public $timestamps = false;

    protected $keyType = 'string';

    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('link');
        $table->string('category')->default('Allgemein');
        $table->string('author')->nullable()->default(null);
        $table->timestamp('published_on')->nullable()->default(null);
        $table->string('thumbnail')->default('missing_thumbnail');
    }

    public function toSearchableArray()
    {
        return [
            'title' => $this->title,
            'link' => $this->link,
            'category' => $this->category,
            'author' => $this->author,
            'published_on' => $this->published_on,
            'plaintext' => $this->plaintext()
        ];
    }

    public function getKeyName()
    {
        return 'link';
    }
    
    public function getIncrementing()
    {
        return false;
    }

    public function plaintext()
    {
        $htmlToTextOptions = array(
            'ignore_errors' => true,
            'drop_links' => true
        );

        $textOnly = Html2Text::convert($this->content, $htmlToTextOptions);
        $oneLine = str_replace(array("\r","\n")," ", $textOnly);
        $onlyOneSpaceAllowed = preg_replace('!\s+!', ' ', $oneLine);

        return $onlyOneSpaceAllowed;
    }

    public function read_time()
    {
        return (new ReadTime($this->plaintext()))->get();
    }

}


// Article::create(['title' => 'Default Test', 'thumbnail' => 'missing_thumbnail', 'thumbnail_slide' => 'missing_thumbnail_slide', 'link' => 'default-test1']);
