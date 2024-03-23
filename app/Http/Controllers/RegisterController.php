<?php

use Illuminate\Foundation\Auth\RegistersUsers;
use \App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected function create(Request $request)
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

        $user->sendEmailVerificationNotification();

        $token = auth()->login($user);

        return response()->json([
            'status' => 'success',
            'token' => $token,
        ]);
    }

}

?>
