export const sumAndMultiplyOutput = (s1, s2) => {
  const a = Number(s1);
  const b = Number(s2);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "not numbers";
  }
  /* eslint-disable no-console */
  return console.log(`sum = ${a + b}; mul = ${a * b}`);
  /* eslint-enable no-console */
};

export const strSum = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.length + b.length;
  }
  return "not strings";
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
