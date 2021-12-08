const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {
  const allPrimitives = [
    ellipsoid({ radius: [2, 1, 1.5], segments: 64, axes: [[1, 1, 0], [0, -1, 1], [-1, 0, 1]]}),
  ];

  return allPrimitives.map((primitive, index) => {
    return translate([(index % 4 - 2) * 6, Math.floor(index / 4 - 2) * 6, 0], primitive)
  });
};

module.exports = { main };