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
  let table = "";
  while (y <= 9) {
    const mul = y * 7;
    table += `7 x ${y} = ${mul}\n`;
    y += 1;
  }
  return table;
}

// 3

export const oddSum = (input) => {
  const numArr = input.split("");
  const sum = numArr.reduce((acc, num) => {
    const result = acc + Number(num);
    return result;
  }, 0);

  return sum / 2;
};
