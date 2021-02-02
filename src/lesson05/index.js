// 1
const arr1 = [5, 2, 4, 7, 11, 12, -1, 8, -2, -8];
const sum = arr1.reduce((acc, index) => {
  acc += index;
  return acc;
}, 0);

// console.log(sum);

// 2
const arr2 = arr1.map((el) => el * 2);
// console.log(arr2)

// 3
let max = arr1[0];
let min = arr1[0];
for (let i = 1; i <= arr1.length; i++) {
  if (arr1[i] > max) max = arr1[i];
  if (arr1[i] < min) min = arr1[i];
}
console.log(min, max);
