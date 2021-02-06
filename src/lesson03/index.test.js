import { oddSum, multiplyTableForSeven, sumOfFifty } from "./index";

describe("exercise 1 sumOfFifty", () => {
  it("returned value should not be greater than 3825", () => {
    expect(sumOfFifty()).not.toBeGreaterThan(3825);
  });
  it("returned value is not null", () => {
    expect(sumOfFifty()).not.toBeNull();
  });
});

describe("exercise 2 oddSum", () => {
  it('returned value is number for "123"', () => {
    expect(typeof oddSum("123")).toBe("number");
  });
});

describe("exercise 3 multiplyTableForSeven", () => {
  it("returned value is string", () => {
    expect(typeof multiplyTableForSeven() === "string").toBeTruthy();
  });
});
