<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class,'index']);
Route::get('/home', [HomeController::class, 'show']);
Route::get('/add-home', [HomeController::class, 'create']);
Route::get('/edit-home{id}', [HomeController::class, 'edit']);
Route::get('/about', [AboutController::class,'index']);
Route::get('/admin-about', [AboutController::class, 'show']);
Route::get('/add-about', [AboutController::class, 'create']);
Route::get('/edit-about{id}', [AboutController::class, 'edit']);


Route::post('/addHome', [HomeController::class, 'store']);
Route::put('/updateHome{id}', [HomeController::class, 'update']);
Route::post('/addAbout', [AboutController::class, 'store']);
Route::put('/updateAbout{id}', [AboutController::class, 'update']);


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
