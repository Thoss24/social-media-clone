<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friendship extends Model
{
    use HasFactory;

    protected $table = 'friendship';
    protected $primaryKey = 'friendship_id';
    public $timestamps = false;
    protected $fillable = ['date_established'];

}
