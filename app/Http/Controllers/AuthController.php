<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use \App\Models\User;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(LoginRequest $request) 
    {
        // $request->validate([
        //     'email' => 'required|email',
        //     'password' => 'required',
        // ]);

        // if (!Auth::attempt($request->only(['email', 'password']))) {
        //     return $this->error('', 'Credentials do not match', 401);
        // }
     
        // $user = User::where('email', $request->email)->first();

        // return $this->success([
        //     'user' => $user,
        //     'token' => $user->createToken('Api Token of ' . $user->name)->plainTextToken
        // ]);
     
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);

        // if (Auth::attempt($credentials)) {
        //     /** @var \App\Models\MyUserModel $user **/
        //     $user = Auth::user();
        //     $token = $user->createToken('auth_token')->plainTextToken;

        //     // return response()->json($user);

        //     //$user = User::find(1);

        //     //$cookie = cookie('session_token', $token, 60 * 24);
            
        //     //return redirect()->intended('/user')->withCookie(cookie('auth_token', $token, 60 *2));

        //     return json_encode($token);
        
        // } else {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // } 
    }

    public function register(Request $request) 
    {
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

    public function user(Request $request) 
    {
        return Auth::user();
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
