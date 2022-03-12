@extends("layouts.app")

@section('content')
    <main-header></main-header>
    <secondary-header></secondary-header>
    <div class="contentwrapper">
        <article-content 
            category="{{ $category ?? 'Allgemein' }}" 
            title="{{ $title }}" 
            timestamp="{{ $published_on }}" 
            author="{{ $author ?? 'Unbekannter Autor' }}" 
            {{-- authorimg="<?php 

                $authorID = "";
                /*  
                    Hier die Bedingung dafür, dass kein Author vorhanden ist, ich habs jetz mal als empty string gemacht,
                    aber wir wollen ja überprüfen obs in der Datenbank steht, dazu muss noch die Anfrage und die Verarbeitung rein,
                    davon hab ich aber keine Ahnung
                */
                $forbiddenCharacters = array("`", "°", "´", "~", "!", "@", "#", "$", "%", "^", "*", "(", ")", "+", "=", "{", "}", "[", "]", "\\", "|", ";", ":", "'", "\"", "<", ">", ",", ".");
                for ($i = 0; $i < strlen($author); $i++) {
                    $char = strtolower($author)[$i];
                    if ($char == " ") {
                        $authorID .= "_";
                    } else if (in_array($char, $forbiddenCharacters)) {
                    } else if ($char == "â" || $char == "á" || $char == "à") {
                        $authorID .= "a";
                    } else if ($char == "ô" || $char == "ó" || $char == "ò") {
                        $authorID .= "o";
                    } else if ($char == "û" || $char == "ú" || $char == "ù") {
                        $authorID .= "u";
                    } else if ($char == "ê" || $char == "é" || $char == "è") {
                        $authorID .= "e";
                    } else if ($char == "î" || $char == "í" || $char == "ì") {
                        $authorID .= "i";
                    } else {
                        $authorID .= $char;
                    }
                }
                // echo $authorID;
                $filePath = "/img/authors/".$authorID."-authorimg.jpeg";
                // if (file_exists($filePath)) {
                echo $filePath;
                // } else {
                //     echo "/img/authors/default-authorimg.svg";
                // }
                // if (is_file($filePath)) {
                //     echo "FileExists";
                // }
                // echo(dd(is_file($filePath)));
                // echo "".file_exists($filePath)."";
            ?>"  --}}
            time="5 Minuten"
        >

            {!! $content !!}
            
        </article-content>
    </div>
    <foot></foot>
@endsection