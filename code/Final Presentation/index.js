const jscad = require('@jscad/modeling');

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const getParameterDefinitions = () => {
  // here we return the definitions of our parameters
  return [
    {name: 'size', caption: 'Size:', type: 'float', initial: 5},
  ];
};

// the main function now receives a parameters object
const main = (parameters) => {
  // from parameters we get all the inputs
  const sphereObject = sphere({size: parameters.size});
  return sphereObject;
}

// for it to work, we also need to export the new getParameterDefinitions function
module.exports = { main, getParameterDefinitions }