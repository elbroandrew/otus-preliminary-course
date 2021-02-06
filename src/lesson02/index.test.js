import { isGreater, monthName, compare } from "./index";

describe("exercise 1 isGreater", () => {
  it("returns 7 for 7 and 5", () => {
    expect(isGreater(5, 7)).toBe(7);
  });

  it('returns "a or b is not a number" for str1 and str2', () => {
    const str1 = "hello";
    const str2 = "world";
    expect(isGreater(str1, str2)).toBe("a or b is not a number");
  });

  it('returns "a or b is not a number" for str1 and x=5', () => {
    const str1 = "hello";
    const x = "5";
    expect(isGreater(str1, x)).toBe("a or b is not a number");
  });
});

describe("exercise 2 monthName", () => {
  

  it('should return January for "1" ', () => {
    
    expect(monthName("1")).toBe("January");
  });

  it('returns "It should be a number between 1 and 12" for "0"', () => {
    expect(monthName("0")).toBe("It should be a number between 1 and 12");
  });

  it('returns "It should be a number between 1 and 12" for "[]"', () => {
    expect(monthName("[]")).toBe("It should be a number between 1 and 12");
  });
});

describe('exercise 3 compare', () => {

  it('returns "can be inscribed in a square" ', ()=>{
    const squareArea = 150;
    const circleArea = 100;
    expect(compare(circleArea, squareArea)).toBe("can be inscribed")
  })

  it('returns "cannot be inscribed in a square"', ()=>{
    const squareArea = 50;
    const circleArea = 100;
    expect(compare(circleArea, squareArea)).toBe("cannot be inscribed")
  })

  it('returns "Input values should be numbers"', ()=>{
    const squareArea = '150';
    const circleArea = 100;
    expect(compare(circleArea, squareArea)).toBe("values should be numbers")
  })

  it('returns "one of values is 0"', ()=>{
    const squareArea = 0;
    const circleArea = 100;
    expect(compare(circleArea, squareArea)).toBe("one of values is 0");
  })
})