// 1

export function sum(arr) {
  const result = arr.reduce((acc, index) => acc + index, 0);
  return result;
}

// 2
export function doubleArray(arr) {
  return arr.map((el) => el * 2);
}

// 3
export function minAndMax(arr1) {
  if (arr1.length !== 0) {
    arr1.sort((a, b) => a - b);
    return { min: arr1[0], max: arr1[arr1.length - 1] };
  }
  return "empty array";
}
