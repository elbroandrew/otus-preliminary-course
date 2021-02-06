import { minutesPassed, compareDates } from "./index";

describe("minutesPassed", () => {
  it("returns minutes passed for a specific date", () => {
    const todaysDate = new Date("2020-11-23T12:30");
    expect(minutesPassed(todaysDate)).toBe(750);
  });
});

describe("compareDates", () => {
  it("returns 'person1 is older'", () => {
    const person1 = new Date("1987-03-21");
    const person2 = new Date("1987-04-22");

    expect(compareDates(person1, person2)).toBe("person1 is older");
  });

  it("returns 'person2 is older'", () => {
    const person1 = new Date("1987-03-21");
    const person2 = new Date("1986-04-22");

    expect(compareDates(person1, person2)).toBe("person2 is older");
  });
  it("returns 'they are peers'", () => {
    const person1 = new Date("1987-03-21");
    const person2 = new Date("1987-03-21");

    expect(compareDates(person1, person2)).toBe("they are peers");
  });
});
