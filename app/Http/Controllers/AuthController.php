<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use \App\Models\User;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) 
    {
        $credentials = request(['email', 'password']);
        $remember = request(['remember'])['remember'];

        if ($token = auth()->attempt($credentials)) {
            $user = Auth::user();
        
            if ($remember) {
                $token = JWTAuth::fromUser($user, ['remember' => true]);

                $user->remember_token = $token;
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        } 

        return $this->respondWithToken($token);
    }

    public function register(Request $request) {

        $credentials = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
        ]);

        $token = auth()->login($user);

        //$user->sendEmailVerificationNotification();

        return response()->json([
            'status' => 'success',
            'token' => $token,
        ]);
        
    }

    public function logout(Request $request) {

    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ]);
    }

}
