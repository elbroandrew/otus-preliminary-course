//1

let x = 50;
while (x <= 100) {
  x += 1;
}
console.log(x);

//2
let y = 1;
while (y < 10) {
  let mul = y * 7;
  console.log(`7 x ${y} = ${mul}`);
  y++;
}

//3
let input = prompt("Enter a number: ");
let counter = parseInt(input);
let x = 1;
let oddSum = 0;
do {
  if (x % 2 !== 0) {
    oddSum += x;
    console.log(x);
  }
  x += 1;
} while (x < counter);

console.log(oddSum / 2);
