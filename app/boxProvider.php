<?php
function printBoxes() {
    // echo(Request::path());
    // echo(getBoxesFromDatabase("corona-sicherheit")->name);
    foreach (getBoxesFromDatabase(Request::path()) as $box) {
        echo(getFormattedBox($box));
    }
}

function getFormattedBox(Box $box) {
    $out = '';
    if ($box->imagelink != '') {
        $out .= '
        <div class="box image">
            <a href="'.$box->link.'">
                <div class="imagecontainer">
                    <img src="'.$box->imagelink.'"/>
                </div>
                <div class="content">
                    <div class="info">
                        <span class="category">'.$box->category.'</span> <span class="time">'.$box->time.'</span>
                    </div>
                    <h3>'.$box->name.'</h3>
                </div>
            </a>
        </div>
        ';
    }
    // if ($box->imagelink != '') {
    //     $out = $out.'
    //             <div class="image">
    //                 <img src="'.$box->imagelink.'"/>
    //                 <div class="content">
    //                     '.$text.'
    //                 </div>
    //             </div>
    //         </a>
    //     </div>
    //     ';
    // } else {
    //     $out = $out.'
    //             <div class="text">
    //                 '.$text.'
    //             </div>
    //         </a>
    //     </div>
    //     ';
    // }

    return $out;
}

function getBoxesFromDatabase($route) {
    $boxes = array(
        new Box("Unsere Schülergenossenschaft", "/", "../../images/schuelergenossenschaft.jpg", "Wahlkurse", "vor 2 Wochen"),
        new Box("Das neue Schuljahr", "/", "../../images/neuesschuljahr.jpg", "Allgemeines", "vor 5 Monaten"),
        new Box("Schulbeginn für die Kleinen", "/", "../../images/schulbeginn.jpg", "Unterricht", "vor 4 Monaten"),
        new Box("Sicherheit während Corona", "/", "../../images/masks.png", "Allgemeines", "vor 6 Monaten"),
        new Box("Woher kommt die neue Homepage?", "/", "../../images/html.jpg", "Wahlkurse", "vor 2 Tagen")
    );
    return $boxes;
}

class Box {
    public String $name;
    public String $link;
    public String $imagelink;
    public String $category;
    public String $time;
    
    function __construct($name, $link, $imagelink, $category, $time) {
        $this->name = $name;
        $this->link = $link;
        $this->imagelink = $imagelink;
        $this->category = $category;
        $this->time = $time;
    }
}
?>