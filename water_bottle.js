console.log("Water Bottle JS Loaded");

function go_back() {
    window.location = "home.html";
}

function preload() {
    img_waterbottle = loadImage("Water_Bottle.jpg");
    console.log(img_waterbottle+ "Water_bottle.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_waterbottle, 0, 0, 320, 500);
    // 
    fill("#ffffff");
    text("WATER BOTTLE", 30, 110);
    // 
    noFill();
    stroke("#ffffff");
    rect(30, 120, 120, 280);
    // 
    // 
    fill("#ffffff");
    text("BOOK", 200, 320);
    // 
    noFill();
    stroke("#ffffff");
    rect(80, 330, 240, 170);
    //

}