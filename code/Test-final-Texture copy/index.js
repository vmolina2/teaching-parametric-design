const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;



const main = () => {

  const cubeObject = cube({size: 100});
  
  let img;
  function preload() {
    img = loadImage('leaf.jpg');
  }
function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(img);
  cubeObject()
}
}