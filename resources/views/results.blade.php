@extends('layouts.app')

@section('title', 'Suche: '.Request::get('q'))

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <search></search>
        <search-results>{{ Request::get('q') }}</search-results>
    </div>
    <Foot></Foot>
@endsection
