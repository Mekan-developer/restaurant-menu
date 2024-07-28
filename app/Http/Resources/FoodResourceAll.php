<?php

namespace App\Http\Resources;

use App\Models\FoodIngredient; 
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResourceAll extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'images' => $this->getImage(),
            'discount' => $this->discount ?: null,
            'discount_unit' => $this->discount_unit ?($this->discount_unit == 'manat' ? 'TMT' : '%'): null,
            'sizes' => SizeResource::collection($this->sizes),
            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
