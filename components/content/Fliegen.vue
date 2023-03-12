<template></template>

<script>
export default {
    props: ['fps'],
    mounted() {
        document.body.onmousemove = function (e) {
            mouseX = e.clientX + window.scrollX;
            mouseY = e.clientY + window.scrollY;
        }

        timeStep = 1000.0 / this.fps;

        nextLevel();
        aktiv = window.setInterval(moveAll, timeStep);
    }
}

var flies = [];
var lastIndex = 0;
var mouseX = 0, mouseY = 0;
var level = 0;

const texturePath = "/images/wahlkurse/theHomepageGames";
var timeStep = 1000.0 / 60.0;
const flightbox = 300;
const hitbox = 30;

function Vector() {
    this.x = arguments[0];
    this.y = arguments[1];

    this.norm = function () {
        var m = this.mag();
        this.x = this.x / m;
        this.y = this.y / m;
    }

    this.setMag = function (m) {
        this.norm();
        this.x = this.x * m;
        this.y = this.y * m;
    }

    this.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

function Fly() {
    this.index = lastIndex++;
    this.o = document.createElement("img");
    this.o.src = texturePath + "/Fliege.png";
    this.o.style.position = "absolute";
    this.o.style.zIndex = "11";
    this.o.id = "fliege" + this.index;
    this.o.width = hitbox;
    this.o.height = hitbox;

    document.body.appendChild(this.o);
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.vx = 0;
    this.vy = 0;
    this.dead = false;
    flies.push(this);

    this.update = function () {
        this.o.style.left = this.x - 9 + "px";
        this.o.style.top = this.y - 9 + "px";
        if (flies.length < 1000) var rot = Math.PI - Math.atan(this.vx / this.vy);
        if (isNaN(rot)) rot = 0;
        if (this.vy < 0) rot += Math.PI;
        this.o.style.transform = "rotate(" + rot + "rad)";
    }

    this.checkEdge = function () {
        var left = window.scrollX;
        var right = window.scrollX + window.innerWidth;
        var top = window.scrollY;
        var bottom = window.scrollY + window.innerHeight;

        if (this.x < left) {
            this.x = left;
            this.vx += 2;
        }
        if (this.x > right - hitbox / 2) {
            this.x = right - hitbox / 2;
            this.vx -= 2;
        }
        if (this.y < top) {
            this.y = top;
            this.vy += 2;
        }
        if (this.y > bottom - hitbox / 2) {
            this.y = bottom - hitbox / 2;
            this.vy -= 2;
        }
    }

    this.kill = function () {
        this.dead = true;
        this.o.src = texturePath + "/FliegeTot.png";
        this.o.style.pointerEvents = "none";

        flies.splice((flies.indexOf(this)), 1);
    }

    this.move = function (t) {
        if (this.dead) return;
        this.checkMouse(mouseX, mouseY);

        this.vx += (Math.random() - 0.5) * t * 0.3;
        this.vy += (Math.random() - 0.5) * t * 0.3;
        this.vx = Math.min(Math.max(this.vx, -8), 8);
        this.vy = Math.min(Math.max(this.vy, -8), 8);


        this.x += this.vx * t;
        this.y += this.vy * t;
        this.checkEdge();

        this.update();
    }

    this.flyAway = function (v) {

        var m1 = v.mag();
        var m2 = Math.pow((-1 * (m1 / 250) + 1) * 2, 2);
        v.setMag(m2);

        this.vx += 5 * Math.min(Math.max(0.9 * v.x, -4), 4);
        this.vy += 5 * Math.min(Math.max(0.9 * v.y, -4), 4);
    }

    this.checkMouse = function (mx, my) {
        if (this.dead) return;
        var relMausVek = new Vector(this.x - mx, this.y - my);
        var dist = relMausVek.mag();
        if (dist < flightbox) this.flyAway(relMausVek);
        if (dist < hitbox) this.kill();
        else {
            this.vx * 0.1;
            this.vy * 0.1;
        }
    }

}

function spawn(a) {
    var r = 10 * Math.sqrt(a);
    for (var i = 0; i < a; i++) {
        var n = new Fly();
        n.x = window.scrollX + window.innerWidth / 2 + r * Math.cos(2 * Math.PI * i / a);
        n.y = window.scrollY + window.innerHeight / 2 + r * Math.sin(2 * Math.PI * i / a);
        n.vx = Math.cos(2 * Math.PI * i / a);
        n.vy = Math.sin(2 * Math.PI * i / a);
    }
}

function moveAll() {
    for (var i = 0; i < flies.length; i++) flies[i].move(2 * timeStep / 100);
    if (flies.length <= 0)
        nextLevel();
    document.getElementById("fliegenanzahl").innerHTML = flies.length + " " + (flies.length > 1 ? "flies" : "fly") + " left!";
}

function nextLevel() {
    level++;
    var a = Math.min(level * level, 16777216);
    if (level > 1) alert("Level: " + level + "\nFlies: " + a);
    spawn(a);
}
</script>