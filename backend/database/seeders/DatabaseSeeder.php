<?php

namespace Database\Seeders;

use App\Models\Room;
use App\Models\Type;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Type::factory()->create([
            'tipus_nev' => 'egyéni tanulás',
        ]);

        Type::factory()->create([
            'tipus_nev' => 'csoportmunka',
        ]);

        Type::factory()->create([
            'tipus_nev' => 'számítógépes terem',
        ]);

        Type::factory()->create([
            'tipus_nev' => 'csendes olvasó',
        ]);

        Room::factory()->create([
            'type_id' => 1,
            'szoba_nev' => "csendes sarok",
            'emelet' => 1,
            'ferohely' => 12,
            'foglalt_helyek' => 7,
        ]);

        Room::factory()->create([
            'type_id' => 2,
            'szoba_nev' => "közös ötletelő",
            'emelet' => 2,
            'ferohely' => 20,
            'foglalt_helyek' => 11,
        ]);

        Room::factory()->create([
            'type_id' => 3,
            'szoba_nev' => "digitális műhely",
            'emelet' => 3,
            'ferohely' => 16,
            'foglalt_helyek' => 9,
        ]);

        Room::factory()->create([
            'type_id' => 4,
            'szoba_nev' => "Krimi este",
            'emelet' => 4,
            'ferohely' => 15,
            'foglalt_helyek' => 15,
        ]);
    }
}
