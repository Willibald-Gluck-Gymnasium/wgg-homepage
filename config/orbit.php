<?php

return [

    'default' => env('ORBIT_DEFAULT_DRIVER', 'html'),

    'drivers' => [
        'html' => \Alexanderhorner\LaravelOrbitHtmlDriver\Driver\HTMLDriver::class,

        'md' => \Orbit\Drivers\Markdown::class,
        'json' => \Orbit\Drivers\Json::class,
        'yaml' => \Orbit\Drivers\Yaml::class,
    ],

    'paths' => [
        'content' => resource_path('content'),
        'cache' => storage_path('framework/cache/orbit'),
    ],

];
