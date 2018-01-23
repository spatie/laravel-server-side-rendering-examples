let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/assets/js/vue/entry-client.js', 'public/js/vue')
    .js('resources/assets/js/vue/entry-server.js', 'public/js/vue')

    .react('resources/assets/js/react/entry-client.js', 'public/js/react')
    .react('resources/assets/js/react/entry-server.js', 'public/js/react')

    .postCss('resources/assets/css/app.css', 'public/css/app.css', [
        require('tailwindcss')('./tailwind.js'),
    ])

    .webpackConfig({
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.common.js',
            },
        },
    });
