<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FoodRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'file' => 'nullable|array',
            'file.*' => 'image|mimes:webp,jpeg,png,jpg,gif,svg|max:6144', //'required|image|max:512',
            'discount' => 'nullable|numeric|min:1',
            'discount_unit' => 'nullable|in:manat,percent',
            'category_id' => 'required|exists:categories,id',
            'name.*' => 'required',
            'description.*' => 'nullable',
        ];

        if ($this->isMethod('patch')) {
            $rules['file.*'] = 'required|image|max:6144';
        }

        return $rules;
    }
}
