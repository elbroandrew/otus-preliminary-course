// 1

export function sum(arr) {
  /* eslint-disable no-param-reassign */
  const result = arr.reduce((acc, index) => {
    acc += index;
    return acc;
  }, 0);
  /* eslint-enable no-param-reassign */
  return result;
}

// 2
export function doubleArray(arr) {
  return arr.map((el) => el * 2);
}

// 3
export function minAndMax(arr1) {
  if (arr1.length !== 0) {
    let max = arr1[0];
    let min = arr1[0];
    for (let i = 1; i <= arr1.length; i += 1) {
      if (arr1[i] > max) max = arr1[i];
      if (arr1[i] < min) min = arr1[i];
    }
    return { min, max };
  }
  return "empty array";
}
