import { sumAndMultiplyOutput, strSum, sumOfInputDigits } from "./index";

//1
describe("exercise 1 return sum and multiply of two numbers", () => {
  it("returns 'obj.sum' to be 5 and 'obj.mul' to be 6 for numbers 2 and 3", () => {
    let obj = sumAndMultiplyOutput(2, 3);

    expect(obj.sum).toBe(5);
    expect(obj.mul).toBe(6);
  });

  it('returns "not numbers" for strings "str1" and "str2"', () => {
    const str1 = "abc",
      str2 = "def";
    expect(sumAndMultiplyOutput(str1, str2)).toBe("not numbers");
  });

  it("returns 'not numbers' for value1 = NaN and value2 = NaN values", () => {
    const value1 = NaN,
      value2 = NaN;
    expect(sumAndMultiplyOutput(value1, value2)).toBe("not numbers");
  });
});

//2
describe("exercise 2 two strings sum", () => {
  it("returns 10 for strings 'lorem' and 'ipsum'", () => {
    expect(strSum("lorem", "ipsum")).toBe(10);
  });

  it('returns "not strings" for numbers 1 and 2', () => {
    expect(strSum(1, 2)).toBe("not strings");
  });
  it('returns "not strings" for arrays', () => {
    expect(strSum([], [])).toBe("not strings");
  });
});
//3
describe("exercise 3, sum of digits in 3-digit number", () => {
  it("returns 6 for '123' ", () => {
    expect(sumOfInputDigits("123")).toBe(6);
  });

  it('returns 6 for "-123"', () => {
    expect(sumOfInputDigits("-123")).toBe(6);
  });

  it('returns "12 is not a 3-digit number" ', () => {
    expect(sumOfInputDigits("12")).toBe("12 is not a 3-digit number");
  });
  it('returns "-12 is not a 3-digit number" for "-12"', () => {
    expect(sumOfInputDigits("-12")).toBe("-12 is not a 3-digit number");
  });

  it('returns "1234 is not a 3-digit number" for "1234"', () => {
    expect(sumOfInputDigits("1234")).toBe("1234 is not a 3-digit number");
  });

  it('returns "Empty value" for ""', () => {
    expect(sumOfInputDigits("")).toBe("Empty value");
  });
});