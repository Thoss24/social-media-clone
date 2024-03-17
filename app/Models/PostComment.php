<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    use HasFactory;

    protected $table = 'post_comment';
    protected $primaryKey = 'comment_id';
    public $timestamps = false;
    protected $fillable = ['comment'];

}
