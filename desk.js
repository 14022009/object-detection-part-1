console.log("Desk JS Loaded");

function go_back() {
    window.location = "home.html";
}

function preload() {
    img_desk = loadImage("Desk.jpg");
    console.log(img_desk + "Desk.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_desk, 0, 0, 320, 500);
    // 
    fill("#000000");
    text("DESK", 30, 105);
    // 
    noFill();
    stroke("#000000");
    rect(30, 120, 280, 350);
    // 
    // 
    fill("#000000");
    text("PHOTO", 65, 140);
    // 
    noFill();
    stroke("#000000");
    rect(65, 145, 50, 50);
    //
    // 
    fill("#000000");
    text("TREE", 180, 140);
    // 
    noFill();
    stroke("#000000");
    rect(215, 120, 60, 70);
    // 
    // 
    fill("#000000");
    text("LAPTOP", 200, 230);
    // 
    noFill();
    stroke("#000000");
    rect(100, 165, 100, 80);
    //
    // 
    fill("#ffffff");
    text("KEYBOARD", 100, 300);
    // 
    noFill();
    stroke("#ffffff");
    rect(60, 250, 130, 30);
    //
}