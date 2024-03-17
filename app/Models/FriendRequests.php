<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FriendRequests extends Model
{
    use HasFactory;

    protected $table = 'friend_requests';
    protected $primaryKey = 'friendship_id';
    public $timestamps = false;
    protected $fillable = ['status'];

}
