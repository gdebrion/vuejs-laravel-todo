<?php

use Illuminate\Database\Seeder;

class ThingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Thing::class, 12)->create();
    }
}
