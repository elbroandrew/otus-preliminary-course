import { oddSum, multiplyTableForSeven, sumOfFifty } from "./index";
/* eslint-disable no-alert */
/* eslint-disable no-console */
describe("exercise 1 sumOfFifty", () => {
  it("returned value should not be greater than 3825", () => {
    expect(sumOfFifty()).not.toBeGreaterThan(3825);
  });
  it("returned value is not null", () => {
    expect(sumOfFifty()).not.toBeNull();
  });
});

describe("exercise 2 multiplyTableForSeven", () => {
  it("returns '7 x 1 = 7' ", () => {
    jest.spyOn(console, "log");
    multiplyTableForSeven();
    expect(console.log).toBeCalledWith("7 x 1 = 7");
  });
  it("returs last value '7 x 9 = 63' ", () => {
    jest.spyOn(console, "log");
    multiplyTableForSeven();
    expect(console.log).toHaveBeenLastCalledWith("7 x 9 = 63");
  });
  it("have been called 9 times ", () => {
    jest.spyOn(console, "log");
    multiplyTableForSeven();
    expect(console.log).toHaveBeenCalledTimes(9);
  });
});

describe("exercise 3 oddSum", () => {
  let globalPrompt;
  beforeEach(() => {
    globalPrompt = window.prompt;
  });
  afterEach(() => {
    window.prompt = globalPrompt;
  });
  it('returned value is number for "123"', () => {
    window.prompt = jest.fn().mockReturnValue("123");
    const input = window.prompt();
    expect(typeof oddSum(input)).toBe("number");
  });
});
