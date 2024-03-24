<?php

use Illuminate\Foundation\Auth\RegistersUsers;
use \App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    use RegistersUsers;

}

?>
