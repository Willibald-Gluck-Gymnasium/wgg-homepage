@extends("layouts.app")

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        {{-- <breadcrumbs>@yield("title")</breadcrumbs> --}}
        <article-content category="@yield("category")" title="@yield("title")" date="@yield("date")" author="@yield("author")" authorimg="@yield("authorimg")" time="@yield("time")">
            @yield("article")
        </article-content>
        {{-- <card-cluster></card-cluster> --}}
    </div>
    <foot></foot>
@endsection