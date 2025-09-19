<?php

namespace App\Services\Blog;

use App\Http\Requests\ArticleRequest;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\CommentResource;
use App\Models\Article;
use Illuminate\Database\Eloquent\Collection;

class BlogService implements IBlogService
{
    public function getAll(): Collection
    {
        return Article::query()->latest()->get();
    }

    public function showArticle(Article $article): ArticleResource
    {
        return new ArticleResource($article->load('comments'));
    }

    public function createArticle(ArticleRequest $request): ArticleResource
    {
        return new ArticleResource(Article::query()->create($request->validated()));
    }

    public function createCommentToArticle(CommentRequest $request, Article $article): CommentResource
    {
        return new CommentResource($article->comments()->create($request->validated()));
    }
}
