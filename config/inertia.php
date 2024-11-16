<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Server-Side Rendering (SSR)
    |--------------------------------------------------------------------------
    |
    | This option allows you to configure Inertia SSR. The `enabled` option
    | controls whether SSR is active, and the `bundle` option points to
    | the SSR bundle generated by your build tool.
    |
    */
    'ssr' => [
        'enabled' => true, // Enable SSR
        'url' => null, // Set to a URL if using an external SSR server
        'bundle' => base_path('resources/js/ssr.jsx'), // Path to the SSR bundle
    ],
];
