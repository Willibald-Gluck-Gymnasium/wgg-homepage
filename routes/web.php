<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use Illuminate\Http\Request;


use App\Http\Controllers\WebControllers\ArticleController;
use App\Http\Controllers\WebControllers\HomeController;
use App\Http\Controllers\WebControllers\DirectFileController;

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

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register')
//     ]);
// })->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

// Route::get('/results', function () {
//     return Inertia::render('Results', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register')
//     ]);
// })->name('results');

Route::get('/tag/{tag}', [ArticleController::class, 'index'])->name('artikel.index');

// Route::get('/impressum', function () {
//     //
// });

// Route::get('/datenschutz', function () {
//     //
// });

Route::get('/license', function () {
    return response()->file( base_path().'/LICENSE' );
});

// Route::get('/phpinfo', function () {
//     phpinfo();
// });

Route::get('/favicon.ico', function () {
    return response()->file( public_path().'/favicons/favicon.ico' );
});


// articleCaseInsensitive is defined in the RouteServiceProvider
Route::get('/{articleCaseInsensitive}', [ArticleController::class, 'show'])->name('artikel.show');

Route::get('/file/{filename}', [DirectFileController::class, 'show'])->name('file.show');