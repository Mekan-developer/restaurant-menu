<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';
    protected $fillable = ['image', 'food_id'];

    public $timestamps = false;

    public function food()
    {
        return $this->belongsTo(Food::class);
    }
}
