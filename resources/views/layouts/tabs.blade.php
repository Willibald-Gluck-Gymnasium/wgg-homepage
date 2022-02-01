@extends("layouts.app")

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <breadcrumbs>@yield("title")</breadcrumbs>
        <tabbed-content>@yield("tabs")</tabbed-content>
        <card-cluster></card-cluster>
    </div>
    <foot></foot>
@endsection