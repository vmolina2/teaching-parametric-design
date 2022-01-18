function setup() {
  createCanvas(400, 400);
}
let img;

function preload() {
  img = loadImage('leaf.jpg');
}

function draw() {
  // x and y position
  image(img, 0, 0);
}