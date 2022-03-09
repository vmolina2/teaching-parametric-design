const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const main = () => {
  const cubeObject = cube({size: 100});

  // Image input
let img;
function preload() {
img = loadImage('leaf.jpg');
}

function setup() {
createCanvas(100, 100, WEBGL);
}

function draw() {
background(0);
//pass image as texture
texture(img);
cube(20);
}

};

module.exports = { main };