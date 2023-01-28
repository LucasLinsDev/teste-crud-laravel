<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pessoa;
use App\Models\Categoria;

use Faker\Generator as Faker;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

    //  \App\Models\User::factory(10)->create();
     \App\Models\Pessoa::factory(10)->create();
    //   Categoria::create([
    //     'nome' => 'Admin',

    //     ]);
    //     Categoria::create([
    //         'nome' => 'Gerente',

    //         ]);
    //         Categoria::create([
    //             'nome' => 'Normal',

    //             ]);

    }
}
