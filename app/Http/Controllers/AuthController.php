<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use \App\Models\Person;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        $email = $request['email'];
        $user = Person::where(DB::raw('BINARY `email`'), '=', $email)->get();

        return response()->json($user);
    }

    public function register(SignupRequest $request) {

    }

    public function logout(Request $request) {

    }
}
