<?php

namespace App\Http\Controllers\WebControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class DirectFileController extends Controller
{
    public function show($filename)
    {   
		$extension = pathinfo($filename, PATHINFO_EXTENSION);
		$allowed_extensions = ["pdf", "mp3", "ogg", "wav"];

		if (!in_array($extension, $allowed_extensions)) {
			return Response::noContent();
		}

		$folders = ["pdf" => "pdf", "mp3" => "audio", "ogg" => "audio", "wav" => "audio"];
		$path = $folders[$extension]."/".$filename;

		$disk = Storage::disk('resources');

		$exists = $disk->exists($path);
		if ($exists) {
			return $disk->download($path);
		} else {
			return Response::noContent();
		}
    }
}
