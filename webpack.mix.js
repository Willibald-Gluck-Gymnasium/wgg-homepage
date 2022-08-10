const mix = require('laravel-mix');

require('laravel-mix-image-processor')
require('laravel-mix-bundle-analyzer')

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

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.img({
    outputPath: 'img',
    name: '[name]-[pipelinename].[ext]',
    esModule: false,
    pipelines: {
        thumbnail: sharp => sharp.resize(800, 375).runPipeline("compression"),

        article: sharp => sharp.resize(2160).runPipeline("compression"),

        footer: sharp => sharp.resize(100, 100).runPipeline("compression"),

        slide: sharp => sharp.resize(2160, 600).runPipeline("compression"),

        compression: sharp => sharp.toFormat("jpeg", { quality: 60, mozjpeg: true, progressive: true, optimiseScans: true })

    }
})

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    
mix.js('resources/js/images.js', 'public/js')

mix.extract();

mix.sass('resources/sass/app.scss', 'public/css')
    .combine([
        'resources/js/modernizr.js'
    ], 'public/js/combined.js')
    .combine([
        'resources/css/cssremedy.css'
    ], 'public/css/combined.css');

mix.sourceMaps()

if (mix.inProduction()) {
    mix.version();
}

// if (!mix.inProduction()) {
//     mix.bundleAnalyzer();
// }