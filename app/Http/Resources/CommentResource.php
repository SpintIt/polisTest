<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $article_id
 * @property mixed $id
 * @property mixed $author_name
 * @property mixed $content
 * @property mixed $created_at
 */
class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'article_id' => $this->article_id,
            'author_name' => $this->author_name,
            'content' => $this->content,
            'created_at' => $this->created_at,
        ];
    }
}
