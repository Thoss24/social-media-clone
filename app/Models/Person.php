<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $table = 'person';
    protected $primaryKey = 'user_id';
    public $timestamps = false;
    protected $fillable = ['name', 'email', 'password', 'biography', 'phone_number'];

}
