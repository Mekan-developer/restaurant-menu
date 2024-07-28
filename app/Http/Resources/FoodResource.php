<?php

namespace App\Http\Resources;

use App\Models\FoodIngredient;
use App\Models\Ingredient;
use App\Models\Image;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'images' => ImageResource::collection(Image::whereFoodId($this->id)->get()),
            'popupImage' => ImageResourcePopup::collection(Image::whereFoodId($this->id)->get()),
            'discount' => $this->discount ?: null,
            'discount_unit' => $this->discount_unit ?($this->discount_unit == 'manat' ? 'TMT' : '%'): null,

            'sizes' => SizeResource::collection($this->sizes),
            // 'sizes' => '0',
            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
