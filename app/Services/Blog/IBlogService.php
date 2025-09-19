<?php

namespace App\Services\Blog;

use App\Http\Requests\ArticleRequest;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\CommentResource;
use App\Models\Article;
use Illuminate\Database\Eloquent\Collection;

interface IBlogService
{
    public function getAll(): Collection;
    public function showArticle(Article $article): ArticleResource;
    public function createArticle(ArticleRequest $request): ArticleResource;
    public function createCommentToArticle(CommentRequest $request, Article $article): CommentResource;
}
