const jscad = require('@jscad/modeling');

const {
  sphere
} = jscad.primitives;

const {
  translate
} = jscad.transforms;

const {
  union,
  subtract,
  intersect,
  scission
} = jscad.booleans;

const size = 40;

const main = () => {
  const sphereShape = sphere({
    radius: size,
    center: [size, size, size]
  });

  const unionShape1 = subtract([cubeShape, sphereShape]);
  const unionShape2 = translate([0,0,0], subtract([sphereShape, cubeShape]));

  const unionShape = union(unionShape1, unionShape2);
  const scissionShapes = scission(unionShape);
  console.log(scissionShapes.length);

  return scissionShapes;
};

module.exports = { main };