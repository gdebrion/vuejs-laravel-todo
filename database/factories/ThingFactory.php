<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Thing;
use Faker\Generator as Faker;

$factory->define(Thing::class, function (Faker $faker) {
    return [
        'title'      => $faker->sentence(8),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
