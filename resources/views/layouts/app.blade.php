<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>To-do list en VueJS / Laravel</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-dark bg-primary sticky-top mb-4 navbar-expand-md">
        <div class="container">
            <router-link to="/" exact class="navbar-brand">To-do List avec <strong>VueJS</strong> et <strong>Laravel</strong></router-link>

            <div class="collapse navbar-collapse justify-content-end">
                <div class="navbar-nav">
                    <a class="nav-link nav-item" href="{{ url('register') }}">S'inscrire</a>
                    <a class="nav-link nav-item" href="{{ url('login') }}">Se connecter</a>
                </div>
            </div>
        </div>
    </nav> 

    <div class="container">@yield('content')</div>
</body>
</html>
