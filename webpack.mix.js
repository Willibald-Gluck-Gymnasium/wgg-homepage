const mix = require('laravel-mix');

require('dotenv').config()

require('laravel-mix-image-processor')

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

mix.webpackConfig(require('./webpack.config'))

mix.img({
    outputPath: 'img',
    name: '[name]-[md4:hash:hex:10].[ext]',
    esModule: false,
    pipelines: {
        thumbnail: sharp => sharp.resize(600, 300).runPipeline("compression"),

        article: sharp => sharp.resize(2160).runPipeline("compression"),

        footer: sharp => sharp.resize(100, 100).runPipeline("compression"),

        slideshow: sharp => sharp.resize(2160, 600).runPipeline("compression"),

        compression: sharp => sharp.toFormat("jpeg", { quality: 60 })

    }
})

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    

if (mix.inProduction()) {
    mix.version();
}


mix.sass('resources/sass/app.scss', 'public/css')
    .combine([
        'resources/js/modernizr.js'
    ], 'public/js/combined.js')
    .combine([
        'resources/css/cssremedy.css'
    ], 'public/css/combined.css');

mix.sourceMaps()
