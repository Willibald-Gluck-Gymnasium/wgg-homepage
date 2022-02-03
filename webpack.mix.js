const mix = require('laravel-mix');
const path = require('path')

require('dotenv').config()

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.alias({ '@resources': path.join(__dirname, 'resources') })
    .alias({ '@components': path.join(__dirname, 'resources/js/components') })

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'))

if (mix.inProduction()) {
    mix.version();
}

// Work-arround for bug in vue-loader that causes src="[object] [module]"
mix.override(webpackConfig => {
    webpackConfig.module.rules[2].use[0].options.esModule = false; 
});

mix.sass('resources/sass/app.scss', 'public/css')
    .combine([
        'resources/js/modernizr.js'
    ], 'public/js/combined.js')
    .combine([
        'resources/css/cssremedy.css'
    ], 'public/css/combined.css');

mix.disableNotifications()

mix.sourceMaps()