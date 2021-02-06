// 1
export const sumAndMultiplyOutput = (a, b) => {
  if (
    !Number.isNaN(a) &&
    typeof a === "number" &&
    !Number.isNaN(b) &&
    typeof b === "number"
  ) {
    return { sum: a + b, mul: a * b };
  }
  return "not numbers";
};

// 2
export const strSum = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.length + b.length;
  }
  return "not strings";
};

// 3
/**
 * function receives prompt string and returns digits sum
 * @param {string} input
 */
export const sumOfInputDigits = (input) => {
  if (/^(-{1})?\d{3}$/.test(input)) {
    // it is a string of 3 digits (minus sign included)
    // get array
    const inputArray = input.split("");
    if (inputArray[0] === "-") {
      inputArray.shift();
    }
    // get sum
    /* eslint-disable no-param-reassign */
    return inputArray.reduce((acc, digit) => {
      acc += Number(digit);
      return acc;
    }, 0);
    /* eslint-enable no-param-reassign */
  }
  if (input === "") {
    return "Empty value";
  }
  // one or more digits is not a number
  return `${input} is not a 3-digit number`;
};

// let input = prompt("Enter a 3-digit integer number: ");
// sumOfInputDigits(input);
