import { diff, isWord, pow } from "./index";

describe("pow", () => {
  it("returns 9 for 3, 2", () => {
    expect(pow(3, 2)).toBe(9);
  });

  it("returns 9 for -3, 2", () => {
    expect(pow(-3, 2)).toBe(9);
  });

  it("returns parameters should be numbers for '3', '2' ", () => {
    expect(pow("3", "2")).toBe("parameters should be numbers");
  });

  it("returns parameters should be numbers for NaN, 2 ", () => {
    expect(pow(NaN, 2)).toBe("parameters should be numbers");
  });
});

describe("isWord", () => {
  it("returns 'is word' for 'hello'", () => {
    expect(isWord("hello")).toBe("is word");
  });
  it("returns 'is line' for 'hello world'", () => {
    expect(isWord("hello world")).toBe("is line");
  });
});

describe("diff", () => {
  it("returns 2 for a=5, b=3", () => {
    const a = 5;
    const b = 3;
    expect(diff(a, b)).toBe(2);
  });
  it("returns 'parameters should be numbers' for strings arguments", () => {
    expect(diff("a", "b")).toBe("parameters should be numbers");
  });
});
