console.log("Fruits JS Loaded");

function preload() {
    img_fruits = loadImage("Fruit.jpg");
    console.log(img_fruits + "Fruits.JS");
}

function setup() {
    canvas = createCanvas(320, 500);
}

function draw() {
    image(img_fruits, 0, 0, 320, 500);
    // 
    fill("#000000");
    text("APPLE", 120, 200);
    // 
    noFill();
    stroke("#000000");
    rect(100, 210, 130, 150);
    // 
    // 
    fill("#000000");
    text("BASKET", 30, 360);
    // 
    noFill();
    stroke("#000000");
    rect(0, 365, 300, 150);
    //

}


function go_back() {
    window.location = "home.html";
}