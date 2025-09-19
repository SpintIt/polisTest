<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    protected $model = Comment::class;

    public function definition(): array
    {
        return [
            'author_name' => fake()->name(),
            'content' => fake()->paragraph(),
            'article_id' => Article::factory(),
        ];
    }
}
