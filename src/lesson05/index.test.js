import { doubleArray, minAndMax, sum } from "./index";

describe("sum", () => {
  it("returns sum = 6 of [1,2,3]", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([1, 2, 3])).not.toBeNull();
  });
});

describe("doubleArray", () => {
  it("returns [2,4,6] for [1,2,3]", () => {
    expect(doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
  });
});

describe("min and max", () => {
  it("returns { max: 3, min: 1 } for [1,2,3]", () => {
    expect(minAndMax([1, 2, 3])).toEqual({ max: 3, min: 1 });
  });

  it('returns "empty array" for []', () => {
    expect(minAndMax([])).toBe("empty array");
  });
});
