@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <flickity-slide></flickity-slide>
    <div class="contentwrapper">
        <v-header style="margin-top: 25px">Neuigkeiten</v-header>
        <card-cluster style="margin-top: 15px"></card-cluster>
    </div>
    <Foot></Foot>
@endsection
