<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel + React SSR Example</title>
        <script defer src="{{ mix('js/react/entry-client.js') }}"></script>
    </head>
    <body>
        {!! ssr('js/react/entry-server.js')->fallback('<div id="app"></div>')->render() !!}
    </body>
</html>
