// 1
export function sumOfFifty() {
  let sum = 0;
  for(let i = 50; i <= 100; i+=1){
    sum += i;
  }
  return sum;
}

// 2
export function multiplyTableForSeven(){
  let y = 1;
  let table = "";
  while(y <= 10){
    const mul = y * 7;
    table += `7 x ${y} = ${mul}\n`;
    y+=1;
  }
  return table;
}


// 3
// let input = prompt('Enter a number: ');

export const oddSum = (input) => {

  const numArr = input.split('');
  const result = numArr.reduce((acc, num) => {
    /* eslint-disable no-param-reassign */
    acc += Number(num);
    /* eslint-enable no-param-reassign */
    return acc;
  }, 0)

  return result/2;
}

// oddSum(input);