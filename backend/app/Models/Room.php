<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    /** @use HasFactory<\Database\Factories\RoomFactory> */
    use HasFactory;

    protected $fillable = [
        'type_id',
        'szoba_nev',
        'emelet',
        'ferohely',
        'foglalt_helyek',
    ];

    public function types(){
        return $this->belongsTo(Type::class);
    }
}
