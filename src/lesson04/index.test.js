import { adminData } from "./index";

describe("getData", () => {
  let globalPrompt;
  beforeEach(() => {
    globalPrompt = window.prompt;
  });
  afterEach(() => {
    window.prompt = globalPrompt;
  });

  function getAge() {
    globalPrompt = jest.fn().mockReturnValue("10");
    const age = globalPrompt();
    return age;
  }

  it("returns object admin", () => {
    const age = getAge();
    expect(adminData(age)).toMatchObject({
      age: 10,
      name: "John",
      role: "admin",
    });
  });

  it('returns admin.age equal 10 for "10"', () => {
    const age = getAge();
    const admin = adminData(age);
    expect(admin.age).toBe(10);
  });
});
