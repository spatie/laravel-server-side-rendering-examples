<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{
    public function __invoke()
    {
        return view('welcome');
    }
}
