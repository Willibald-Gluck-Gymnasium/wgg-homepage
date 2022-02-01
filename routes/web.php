<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


use App\Http\Controllers\WebControllers\ArticleController;
use App\Http\Controllers\WebControllers\CollectionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/results', function () {
    return view('results');
});

// Route::get('/collection', function () {
//     return view('collection');
// });

// Route::get('/impressum', function () {
//     //
// });

// Route::get('/datenschutz', function () {
//     //
// });

Route::get('/license', function () {
    return response()->file( base_path().'/LICENSE' );
});

Route::get('/phpinfo', function () {
    phpinfo();
});

// Route::get('/favicon.ico', function () {
//     // return response()->file( public_path().'/favicons/favicon.ico' );
// });

Route::get('/{article}', [ArticleController::class, 'show']);

// Route::get('/collection/{category}', [CollectionController::class, 'show']);
Route::get('/collection/{category}', function($category) {
    return view('collection', [
        'category' => $category
    ]);
});