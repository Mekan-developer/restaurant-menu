<?php

namespace App\Http\Controllers\Api2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Food;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\FoodResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryResourceAll;
use App\Http\Resources\SpecificCategoryResource;
// use App\Http\Resources\CategoryResource;
 
class WebController extends Controller
{ 
    public function categories(){
	    return CategoryResource::collection(Category::whereNull('parent_id')->orderBy('order')->get());
    }

    public function foods(){
        return CategoryResourceAll::collection(Category::whereNotNull('parent_id')->orderBy('order')->get()); 
        // return FoodResource::collection(Food::all()); 
    }

    public function show($id){

        $category = Category::whereParentId($id)->orderBy('order')->get();
        // dd($category);
        if(!$category){
            return response()->json(['message' => 'Category not found'], 404);
        }
        // return Category::where('parent_id','!=', null)->orderBy('order')->get();
        // dd(Category::find($id));
        return SpecificCategoryResource::collection($category);

    }

}
