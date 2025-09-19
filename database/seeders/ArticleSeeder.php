<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Comment;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void {
        Article::factory()->count(rand(3, 5))->create()->each(function (Article $article) {
            Comment::factory()->count(rand(3, 5))->create([
                'article_id' => $article->id,
            ]);
        });
    }
}
