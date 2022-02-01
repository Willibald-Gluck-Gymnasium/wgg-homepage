const mix = require('laravel-mix')

const path = require('path')

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


// Work-arround for bug in vue-loader that causes src="[object] [module]"
mix.override(webpackConfig => {
    webpackConfig.module.rules[2].use[0].options.esModule = false; 
});

mix.alias({ '@': path.join(__dirname, 'resources') })
    .js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .combine([
        'resources/js/modernizr.js'
    ], 'public/js/combined.js')
    .combine([
        'resources/css/cssremedy.css'
    ], 'public/css/combined.css');
