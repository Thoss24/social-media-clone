<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use \App\Models\Person;
use \App\Models\User;

class AuthController extends Controller
{
    public function login(LoginRequest $request) 
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'unauthorized'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('AuthToken')->accessToken;

        return response()->json(['token' => $token]);
       
    }

    public function register(SignupRequest $request) {

    }

    public function logout(Request $request) {

    }
}
