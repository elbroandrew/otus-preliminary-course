// 1
export const diff = (a, b) => {
  if (
    typeof a === "number" &&
    !Number.isNaN(a) &&
    typeof b === "number" &&
    !Number.isNaN(b)
  ) {
    const result = a > b ? a - b : b - a;
    return result;
  }
  return "parameters should be numbers";
};

// 2
export const isWord = (text) => {
  const word = text.split(" ").length === 1 ? "is word" : "is line";
  return word;
};

// isWord("afsdfef eyrefd");

// 3
export const pow = (a, x) => {
  if (
    typeof a === "number" &&
    !Number.isNaN(a) &&
    typeof x === "number" &&
    !Number.isNaN(x)
  ) {
    return a ** x;
  }
  return "parameters should be numbers";
};

// pow(3, 2)
