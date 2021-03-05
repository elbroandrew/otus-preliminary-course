export const sumAndMultiplyOutput = (s1, s2) => {
  if (s1.length !== 0 && s2.length !== 0) {
    const a = Number(s1);
    const b = Number(s2);
    if (!Number.isNaN(a) || !Number.isNaN(b)) {
      console.log(`sum = ${a + b}; mul = ${a * b}`);
    }
  }
  return "not numbers";
};

export const strSum = (a, b) => {
  console.log(a.length + b.length);
};

export const sumOfInputDigits = (input) => {
  if (input.length === 0) {
    return "Empty value";
  }
  if (!/^(-{1})?\d{3}$/.test(input)) {
    return `${input} is not a 3-digit number`;
  }
  const inputArray = Math.abs(input).toString(10).split("");
  let result = 0;
  for (let i = 0; i < inputArray.length; i += 1) {
    result += Number.parseInt(inputArray[i], 10);
  }
  return result;
};
