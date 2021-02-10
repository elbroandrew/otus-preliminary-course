// 1
export function sumOfFifty() {
  let sum = 0;
  for (let i = 50; i <= 100; i += 1) {
    sum += i;
  }
  return sum;
}

// 2
export function multiplyTableForSeven() {
  let y = 1;
  while (y <= 9) {
    console.log(`7 x ${y} = ${y * 7}`);
    y += 1;
  }
}

// 3
export const oddSum = (input) => {
  const numArr = input.split("");
  const sum = numArr.reduce((acc, num) => {
    let result = acc + Number(num);
    result /= 2;
    return result;
  }, 0);
  return sum;
};
