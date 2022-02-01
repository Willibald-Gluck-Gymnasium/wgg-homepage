<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->words($nb = rand(5, 15), $asText = true);
        $link = substr(str_replace(" ", "-", $title), 0, rand(20, 35));
        return [
            'title' => $title,
            'author' => $this->faker->name,
            'link' => $link
        ];
    }
}
