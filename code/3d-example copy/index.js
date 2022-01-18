const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const allPrimitives = [
    sphere({ radius: 2, segments: 16 }),
  ];

  return allPrimitives.map((primitive, index) => {
    return translate([(index % 4 - 2) * 6, Math.floor(index / 4 - 2) * 6, 0], primitive)
  });
};

module.exports = { main };