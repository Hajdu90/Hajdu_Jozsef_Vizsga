<?php

use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\TypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/tanuloszobak', [RoomController::class, 'index'] );
Route::delete('/tanuloszobak/{id}', [RoomController::class, 'destroy'] );
Route::get('/szobatipusok', [TypeController::class, 'index'] );