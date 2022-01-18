const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;


const main = () => {
  const cubeObject = cube({size: 100});
  const sphereObject = sphere({
    radius: 50,
    segments: 50,
    center: [0, 0, 50]
  });
  const sphereObject1 = sphere({
    radius: 25,
    segments: 50,
    center: [0, 0, 0]
  });

  const subtractObject = subtract([sphereObject, cubeObject]);




  return subtractObject;

// Image input
  let img;

      function preload() {
      img = loadImage('leaf.jpg');
      }
        //pass image as texture
  texture(img);
  subtractObject;
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
    box(width / 2);
  }
  // _________________________________________________________________________________


};

module.exports = { main };