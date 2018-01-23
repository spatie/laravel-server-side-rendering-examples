<?php

namespace App\Http\Controllers;

class VueController extends Controller
{
    public function __invoke()
    {
        return view('vue', [
            'packages' => $this->getPackages(),
        ]);
    }

    private function getPackages(): array
    {
        $path = public_path('packages.json');

        $contents = file_get_contents($path);

        return json_decode($contents, true);
    }
}
