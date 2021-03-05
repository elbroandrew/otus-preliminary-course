import { circleArea } from "./part2";

describe("circleArea", () => {
  it("returns '314.2' for radius=10 ", () => {
    const radius = 10;
    const circle = circleArea(radius);
    expect(circle.area).toBe("314.2");
  });

  it("returns 'radius cannot be less then 0' for radius=0 ", () => {
    const radius = 0;

    expect(circleArea(radius)).toBe("radius cannot be less then 0");
  });

  it("returns 'radius cannot be less then 0' for radius=-10 ", () => {
    const radius = -10;

    expect(circleArea(radius)).toBe("radius cannot be less then 0");
  });
});
