<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React SSR Example</title>
    </head>
    <body>
        {!! ssr('js/react/entry.js')->withFallback('<div id="app"></div>') !!}
    </body>
</html>
