<?php

namespace App\Http\Controllers;

class ReactController extends Controller
{
    public function __invoke()
    {
        return view('react', [
            'packages' => $this->getPackages(),
        ]);
    }

    private function getPackages() : array
    {
        $path = public_path('packages.json');

        $contents = file_get_contents($path);

        return json_decode($contents, true);
    }
}
