<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Http\Requests\CommentRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\CommentResource;
use App\Models\Article;
use App\Services\Blog\IBlogService;
use Illuminate\Database\Eloquent\Collection;

class ArticleController extends Controller
{
    private IBlogService $blogService;

    public function __construct(IblogService $blogService)
    {
        $this->blogService = $blogService;
    }

    public function index(): Collection
    {
        return $this->blogService->getAll();
    }

    public function show(Article $article): ArticleResource
    {
        return $this->blogService->showArticle($article);
    }

    public function store(ArticleRequest $request): ArticleResource
    {
        return $this->blogService->createArticle($request);
    }

    public function addComment(CommentRequest $request, Article $article): CommentResource
    {
        return $this->blogService->createCommentToArticle($request, $article);
    }
}
