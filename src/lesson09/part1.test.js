import { isRightTriangle, longerSide, compare } from "./part1";

describe("longerSide", () => {
  it("return c for a=3, b=4, c=5", () => {
    expect(longerSide(3, 4, 5)).toBe(5);
  });

  it("return a for a=6, b=4, c=5", () => {
    expect(longerSide(6, 4, 5)).toBe(6);
  });

  it("return 'wrong value' for a=0, b=4, c=5", () => {
    expect(longerSide(0, 4, 5)).toBe("wrong value");
  });

  it("return 'wrong value' for a='', b=4, c=5", () => {
    expect(longerSide("", 4, 5)).toBe("wrong value");
  });
});

describe("compare", () => {
  it("return true for a=3, b=4, c=5", () => {
    expect(compare(3, 4, 5)).toBeTruthy();
  });

  it("return false for a=6, b=4, c=5", () => {
    expect(compare(6, 4, 5)).toBeFalsy();
  });

  it("return false for a=0, b=4, c=5", () => {
    expect(compare(0, 4, 5)).toBeFalsy();
  });

  it("return false for a='', b=4, c=5", () => {
    expect(compare("", 4, 5)).toBeFalsy();
  });
});

describe("isRightTriangle", () => {
  it("returns true for a=3, b=4, c=5'", () => {
    const a = 3;
    const b = 4;
    const c = 5;
    expect(isRightTriangle(a, b, c)).toBe(true);
  });

  it("returns true for a=4, b=3, c=5'", () => {
    const a = 4;
    const b = 3;
    const c = 5;
    expect(isRightTriangle(a, b, c)).toBe(true);
  });

  it("returns false for a=3, b=3, c=5", () => {
    const a = 3;
    const b = 3;
    const c = 5;
    expect(isRightTriangle(a, b, c)).toBe(false);
  });

  it("returns 'wrong value' for given sides a=0, b=3, c=5", () => {
    const a = 0;
    const b = 4;
    const c = 5;
    expect(isRightTriangle(a, b, c)).toBe("wrong value");
  });
});
