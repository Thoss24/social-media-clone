<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'post';
    protected $primaryKey = 'post_id';
    public $timestamps = false;
    protected $fillable = ['post_content', 'created_at'];

}
