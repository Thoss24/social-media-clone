<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpiredFriendRequests extends Model
{
    use HasFactory;

    protected $table = 'expired_friend_requests';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['sender_id', 'recipient_id', 'status', 'added', 'seen', 'recipient_name'];

}
