import { sumAndMultiplyOutput, strSum, sumOfInputDigits } from "./index";

let windowPrompt;
beforeAll(() => {
  windowPrompt = window.prompt;
  jest.spyOn(console, "log");
});
afterAll(() => {
  window.prompt = windowPrompt;
});

describe("exercise 1 return sum and multiply of two numbers", () => {
  it("returns 'sum=5' and 'mul=6' for '2' and '3'", () => {
    window.prompt = jest.fn().mockReturnValueOnce("2").mockReturnValueOnce("3");
    sumAndMultiplyOutput(window.prompt(), window.prompt());
    expect(console.log).toBeCalledWith("sum = 5; mul = 6");
  });

  it('returns "not numbers" for strings "str1" and "str2"', () => {
    const str1 = "abc";
    const str2 = "def";
    expect(sumAndMultiplyOutput(str1, str2)).toBe("not numbers");
  });

  it("returns 'not numbers' for value1 = NaN and value2 = NaN values", () => {
    const value1 = NaN;
    const value2 = NaN;
    expect(sumAndMultiplyOutput(value1, value2)).toBe("not numbers");
  });
});

describe("exercise 2 two strings sum", () => {
  it("returns 10 for strings 'lorem' and 'ipsum'", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("lorem")
      .mockReturnValueOnce("ipsum");
    strSum(window.prompt(), window.prompt());
    expect(console.log).toBeCalledWith(10);
  });
});

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
