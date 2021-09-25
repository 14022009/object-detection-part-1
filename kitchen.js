console.log("Kitchen JS Loaded");

function go_back() {
    window.location = "home.html";
}

function preload() {
    img_kitchen = loadImage("Kitchen.jpg");
    console.log(img_kitchen + "Kitchen.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_kitchen, 0, 0, 320, 500);
    // 
    fill("#ffffff");
    text("CHAIRS", 150, 240);
    // 
    noFill();
    stroke("#ffffff");
    rect(150, 250, 100, 170);
    //
    // 
    fill("#ffffff");
    text("MICROWAVE", 210, 170);
    // 
    noFill();
    stroke("#ffffff");
    rect(220, 180, 70, 100);
    //
    // 
    fill("#000000");
    text("LIGHTS", 40, 30);
    // 
    noFill();
    stroke("#000000");
    rect(60, 40, 140, 110);
    //
}