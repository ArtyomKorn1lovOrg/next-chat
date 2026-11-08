<?php

use Illuminate\Support\Facades\Route;
use Package\Chat\Presentation\Controllers\MessageController;

Route::prefix('api/v1')
    ->middleware('api')
    ->group(function () {
        Route::get('/messages', MessageController::class);
    });
