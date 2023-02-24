<template>
    <div
        style="height: 100%; width: 100%; position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0xp; background: #ff00ff77;">
    </div>
</template>

<script>

var fliegen = [];
var lastIndex = 0;
var mausX = 0, mausY = 0;
var fliegenAnzahl = 10;
var level = 0;

function Vektor() {
    this.x = arguments[0];
    this.y = arguments[1];

    this.norm = function () {
        var m = this.mag();
        this.x = this.x / m;
        this.y = this.y / m;
    }

    this.setMag = function (m) {
        this.norm();
        //console.log(this.mag());
        this.x = this.x * m;
        this.y = this.y * m;
    }

    this.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

function Fliege() {
    this.index = lastIndex++;
    this.o = document.createElement("img");
    this.o.src = "pics/Fliege.png";
    this.o.style.position = "absolute";
    this.o.style.zIndex = "11";
    this.o.id = "fliege" + this.index;
    /*this.o.onmouseover = function () {
        var ind = parseInt(this.id.slice(6));
        console.log(ind, this);
        //fliegen.slice(fliegen.indexOf(this), fliegen.indexOf(this));
        fliegen.forEach(function (flie) {
            if (ind == flie.index) {
                flie.stirb();
                console.log(flie);
            }
        });
    }*/
    document.body.appendChild(this.o);
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.vx = 0;
    this.vy = 0;
    this.tot = false;
    fliegen.push(this);

    this.update = function () {
        this.o.style.left = this.x - 9 + "px";
        this.o.style.top = this.y - 9 + "px";
        if (fliegen.length < 1000) var rot = Math.PI - Math.atan(this.vx / this.vy);
        if (isNaN(rot)) rot = 0;
        if (this.vy < 0) rot += Math.PI;
        this.o.style.transform = "rotate(" + rot + "rad)";
        //console.log(rot);
    }

    this.randTest = function () {
        if (this.x < 0) {
            this.x = 0;
            this.vx += 2;
        }
        if (this.x > window.innerWidth - 30) {
            this.x = window.innerWidth - 30;
            this.vx -= 2;
        }
        if (this.y < 0) {
            this.y = 0;
            this.vy += 2;
        }
        if (this.y > window.innerHeight - 30) {
            this.y = window.innerHeight - 30;
            this.vy -= 2;
        }
    }

    this.stirb = function () {
        this.tot = true;
        this.o.src = "pics/FliegeTot.png";
        this.o.style.pointerEvents = "none";

        fliegen.splice((fliegen.indexOf(this)), 1);
    }

    this.beweg = function (t) {
        if (this.tot) return;
        this.maus(mausX, mausY);

        this.vx += (Math.random() - 0.5) * t * 0.3;
        this.vy += (Math.random() - 0.5) * t * 0.3;
        this.vx = Math.min(Math.max(this.vx, -8), 8);
        this.vy = Math.min(Math.max(this.vy, -8), 8);


        this.x += this.vx * t;
        this.y += this.vy * t;
        this.randTest();

        this.update();
    }

    this.fliegWeg = function (v) {

        var m1 = v.mag();
        var m2 = Math.pow((-1 * (m1 / 250) + 1) * 2, 2);
        v.setMag(m2);
        //console.log(m1,v,v.mag(),m2);
        //console.log(m1 / 250, m2);

        //(-x+1)*3

        this.vx += 5 * Math.min(Math.max(0.9 * v.x, -4), 4);// - Math.pow(Math.abs(this.x - mausX), 0.2);
        this.vy += 5 * Math.min(Math.max(0.9 * v.y, -4), 4);// - Math.pow(Math.abs(this.y - mausY), 0.2);
        //console.log(this.vx,this.vy);
    }

    this.maus = function (mx, my) {
        if (this.tot) return;
        var relMausVek = new Vektor(this.x - mx, this.y - my);
        var dist = relMausVek.mag();
        //var dist = Math.sqrt(Math.pow(mx - this.x, 2) + Math.pow(my - this.y, 2));
        if (dist < 250) this.fliegWeg(relMausVek);
        if (dist < 10) this.stirb();
        else {
            this.vx * 0.1;
            this.vy * 0.1;
        }
        //console.log(dist);
    }

}

function spawn(a) {
    var r = 10 * Math.sqrt(a);
    for (var i = 0; i < a; i++) {
        var n = new Fliege();
        n.x = window.innerWidth / 2 + r * Math.cos(2 * Math.PI * i / a);
        n.y = window.innerHeight / 2 + r * Math.sin(2 * Math.PI * i / a);
        n.vx = Math.cos(2 * Math.PI * i / a);
        n.vy = Math.sin(2 * Math.PI * i / a);
    }
}

//spawn(fliegenAnzahl);


function bewegAlle() {
    for (var i = 0; i < fliegen.length; i++) fliegen[i].beweg(4);
    if (fliegen.length <= 0) {
        level++;
        document.cookie = "level=" + level + "; expires=1000000000";
        var a = Math.min(level * level, 1500);
        if (level > 1) alert("Level: " + level + "\nWeihnachtsfliegenanzahl: " + a);
        spawn(a);
    }
    //console.log(fliegen.length);
    document.getElementById("fliegenanzahl").innerHTML = "Noch " + fliegen.length + " Weihnachtsfliege" + (fliegen.length != 1 ? "n" : "");
}

document.body.onmousemove = function (e) {
    //console.log(e.clientY);
    mausX = e.clientX;
    mausY = e.clientY;
    //fliegen.forEach(function (flie) {
    //    flie.maus(e.clientX, e.clientY);
    //});
}

document.body.onload = function () {
    //console.log("Cookies: "+ document.cookie);
    level = parseInt(document.cookie.split("level=")[1]);
    if (isNaN(level)) level = 1;
    var a = Math.min(level * level, 1500);
    if (level > 1) alert("Level: " + level + "\nWeihnachtsfliegenanzahl: " + a);
    spawn(a);
    aktiv = window.setInterval(bewegAlle, 100);
}

</script>