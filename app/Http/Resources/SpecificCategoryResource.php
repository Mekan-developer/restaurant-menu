<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SpecificCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $food_query = $this->foods()->whereIsActive(true);
        
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'image' => $this->getImage(),
            // 'subcategories' => SubCategoryResource::collection($this->children),
            // 'include' => $this->is_leaf ? $subcategories : $foods,
            // 'parent_id' => $this->parent_id,
            // 'foods' => FoodResourceAll::collection($food_query->get()),
            'foods' => FoodResource::collection($food_query->orderBy('order')->get()),
        ];
    }
}
