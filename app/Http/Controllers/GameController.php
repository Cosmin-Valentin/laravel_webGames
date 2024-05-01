<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function show() {
        if(Auth::guest()) {
            return redirect()->route('home');
        }

        return view('games.runner');
    }
}
