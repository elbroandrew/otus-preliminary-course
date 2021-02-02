//1
export const sumAndMultiplyOutput = (a, b) => {
  if (!isNaN(a) || !isNaN(b)) {
    return { sum: a + b, mul: a * b };
  } else {
    return "not numbers";
  }
};

//2
export const strSum = (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.length + b.length;
  } else {
    return "not strings";
  }
};

//3
/**
 * function receives prompt string and returns digits sum
 * @param {string} input
 */
export const sumOfInputDigits = (input) => {
  if (/^(-{1})?\d{3}$/.test(input)) {
    //it is a string of 3 digits (minus sign included)
    //get array
    let inputArray = input.split("");
    if (inputArray[0] === "-") {
      inputArray.shift();
    }
    //get sum
    return inputArray.reduce((acc, digit) => {
      return (acc += Number(digit));
    }, 0);
  } else if (input === "") {
    return "Empty value";
  } else {
    //one or more digits is not a number
    return `${input} is not a 3-digit number`;
  }
};

//let input = prompt("Enter a 3-digit integer number: ");
//sumOfInputDigits(input);