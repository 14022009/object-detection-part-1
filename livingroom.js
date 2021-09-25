console.log("Living Room JS Loaded");

function go_back() {
    window.location = "home.html";
}

function preload() {
    img_livingroom = loadImage("Livingroom.jpg");
    console.log(img_livingroom + "Livingroom.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_livingroom, 0, 0, 320, 500);
    // 
    fill("#ffffff");
    text("SOFA", 60, 230);
    // 
    noFill();
    stroke("#000000");
    rect(60, 240, 230, 120);
    // 
    // 
    fill("#ffffff");
    text("PAINTING", 130, 90);
    // 
    noFill();
    stroke("#ffffff");
    rect(130, 100, 180, 130);
    //
    // 
    fill("#ffffff");
    text("TABLE", 15, 360);
    // 
    noFill();
    stroke("#ffffff");
    rect(0, 365, 150, 150);
    //
}