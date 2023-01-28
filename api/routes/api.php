<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PessoaController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/pessoas',[PessoaController::class,'index']);
Route::post('/pessoas',[PessoaController::class, 'store']);
Route::get('/pessoas/{id}',[PessoaController::class, 'show']);
Route::put('/pessoas/{id}',[PessoaController::class, 'update']);
Route::delete('/pessoas/{id}',[PessoaController::class, 'destroy']);
