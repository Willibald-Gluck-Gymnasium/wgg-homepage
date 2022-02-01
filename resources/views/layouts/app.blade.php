<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/combined.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('css/combined.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Nunito+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script defer src="{{ asset('js/app.js') }}"></script>

    {{-- Favicon --}}
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=RaUv2">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=RaUv2">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=RaUv2">
    <link rel="manifest" href="/favicons/site.webmanifest?v=RaUv2">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=RaUv2" color="#ff881a">
    <link rel="shortcut icon" href="/favicons/favicon.ico?v=RaUv2">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=RaUv2">
    <meta name="theme-color" content="#ff881a">

    <link rel="preload" href="{{ asset('img/Ripple-1.3s-200px.svg') }}" as="image">
    
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Nunito Sans', sans-serif; 
        }

        [v-cloak] > * { display: none; }

        .loading-screen {
            z-index: 15000;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--clr-wgg-orange); 
        }

        #app.dark .loading-screen {
            background-color: var(--clr-bg-primary);
        }

        @media (prefers-color-scheme: dark) {
            #app.detect-colorscheme .loading-screen{
                background-color: var(--clr-bg-primary) !important;
            }
        }
    </style>
</head>
<body>
    <div id="app" class="detect-colorscheme" v-cloak>

        {{-- Will dissapear once vue is mounted --}}
        <div class="loading-screen" v-if="false">
            <img src="{{ asset('img/Ripple-1.3s-200px.svg') }}" alt="Ladeindikator">
        </div>
        
        @yield('content')
    </div>
</body>
</html>