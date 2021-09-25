console.log("Bedroom JS Loaded");

function go_back() {
    window.location = "home.html";
}

function preload() {
    img_bedroom = loadImage("bedroom.jpg");
    console.log(img_bedroom + "Bedroom.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_bedroom, 0, 0, 320, 500);
    // 
    fill("#000000");
    text("BED", 120, 200);
    // 
    noFill();
    stroke("#000000");
    rect(50, 210, 200, 130);
    // 
    // 
    fill("#ffffff");
    text("PILLOWS", 140, 230);
    // 
    noFill();
    stroke("#000000");
    rect(100, 240, 150, 80);
    //
    // 
    fill("#ffffff");
    text("WINDOW", 50, 120);
    // 
    noFill();
    stroke("#000000");
    rect(50, 130, 90, 150);
    // 
    // 
    fill("#000000");
    text("TOWEL", 70, 350);
    // 
    noFill();
    stroke("#000000");
    rect(70, 360, 70, 50);
    //
    // 
    fill("#000000");
    text("HORNS", 160, 110);
    // 
    noFill();
    stroke("#000000");
    rect(150, 120, 90, 70);
    //

}