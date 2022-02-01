@extends('layouts.app')

@section('title', 'Kollektion: '.strtoupper(substr($category, 0, 1)).substr($category, 1, strlen($category)))

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        {{-- {{ $category }} --}}
        <collection category="{{ $category }}"></collection>
        <card-cluster style="margin-top: 15px"></card-cluster>
    </div>
    <Foot></Foot>
@endsection
