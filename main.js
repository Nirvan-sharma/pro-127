song1="";
song2="";

function  setup() {
    canvas=createCanvas(500,400);
    canvas.center();
    canvas.position(440,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,500,400);

}

function preload() {
    song1=loadSound("music1.mp3");
    song2=loadSound("music2.mp3");
}

function play() {
    song1.play();
}

function stop() {
    song1.pause();
    song2.pause();
}

