//1
// if triangle is right or not
const triangle = {
  sideA : 3,
  sideB : 4,
  sideC : 5,
}

const isRight = (triangle) => {
  return Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) === Math.pow(triangle.sideC, 2);
}


isRight(triangle);

//2
/** @type {string} */
let input = prompt('Enter radius: ');
//** @type {number} */
const radius = parseInt(input);

const area = Math.PI*Math.pow(radius, 2);
const circumference = 2**Math.PI*radius;

console.log(`radius: ${radius}, area: ${area.toFixed(2)}, circumference: ${circumference.toFixed(2)}`);