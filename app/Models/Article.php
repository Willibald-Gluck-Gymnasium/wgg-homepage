<?php

namespace App\Models;

use Illuminate\Support\Str;

// Respurces:
// https://laravel.com/docs/8.x/eloquent

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use \Soundasleep\Html2Text;
use \Orbit\Concerns\Orbital;
use \Mtownsend\ReadTime\ReadTime;


class Article extends Model
{
    use Orbital;

    protected $fillable = ['title', 'link', 'category', 'author', 'published_on', 'thumbnail', 'thumbnail_slide'];

    public $timestamps = false;

    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('link');
        $table->string('category')->default("Allgemein");
        $table->string('author')->nullable()->default(null);
        $table->timestamp('published_on')->nullable()->default(null); // 'YYYY-MM-DD HH:MI:SS'
        $table->string('thumbnail')->default('missing_thumbnail');
        $table->string('thumbnail_slide')->default('missing_thumbnail_slide');
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



