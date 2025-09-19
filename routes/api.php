<?php
use App\Http\Controllers\Api\V1\ArticleController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->name('api.v1.')->group(function () {
    Route::prefix('articles')->name('articles.')->group(function () {
        Route::get('/', [ArticleController::class, 'index'])->name('index');
        Route::get('/{article}', [ArticleController::class, 'show'])->name('show');
        Route::post('/', [ArticleController::class, 'store'])->name('store');

        Route::post('/{article}/comments', [ArticleController::class, 'addComment'])->name('addComment');
    });
});
