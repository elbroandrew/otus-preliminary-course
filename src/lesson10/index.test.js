import { checkEmail, checkDate, checkPhone } from "./index";

describe("checkEmail", () => {
  it("returns true for each value", () => {
    const trueEmails = [
      "xxxx@xxx.xx",
      "xxXX@xxx.xxx",
      "xxx_xxx123@xxxxx.xxx",
      "Xxxxx0123-xxx@xxxx.xx",
      "xxx-12@xx24.xx",
      "xxx.xxxx@xxx.xx",
    ];

    trueEmails.forEach((email) => {
      expect(checkEmail(email)).toBeTruthy();
    });
  });

  it("returns false for each value", () => {
    const falseEmails = [
      "xxxx@xxx.xxxxx",
      "xxXX@xxx.XXX",
      "xxx|xxx123@xxxxx.xxx",
      "xxxxxxxxxxx.xx",
    ];

    falseEmails.forEach((email) => {
      expect(checkEmail(email)).toBeFalsy();
    });
  });
});

describe("checkDate", () => {
  it("returns true for every value true date", () => {
    const trueDate = [
      "1999/10/1",
      "1999.5.5",
      "2018-20-03",
      "1999/21/12",
      "2002.1.2",
    ];

    trueDate.forEach((date) => {
      expect(checkDate(date)).toBeTruthy();
    });
  });

  it("returns false for every false date ", () => {
    const falseDate = [
      "2000/111/22",
      "2000/11/222",
      "66/212/1999",
      "11/22/3000",
      "2100/111/22",
      "2100-20-03",
      "1999-222-03",
      "1999-12-122",
      "199.12.03",
      "199/12/03",
      "03/12/199",
      "199/12/03",
      "199/3/12",
      "11.222.1999",
      "222.11.1999",
      "1999. 19.2",
      "1999 /19/2",
      "1999 19 2",
    ];

    falseDate.forEach((date) => {
      expect(checkDate(date)).toBeFalsy();
    });
  });
});

describe("checkPhone", () => {
  it("returns true for each number", () => {
    const trueNumbers = [
      "+7 123 456 78 90",
      "+7-123-456-78-90",
      "+71234567890",
      "8 123 456 78 90",
      "8-123-456-78-90",
      "81234567890",
      "+7 123 456-78-90",
      "8 999 999 9999",
    ];

    trueNumbers.forEach((number) => {
      expect(checkPhone(number)).toBeTruthy();
    });
  });

  it("returns false for each number", () => {
    const falseNumbers = [
      "+71 23 456 78 90",
      "+7 999999 9999",
      "8123 456 7890",
      "+81234567890",
      "+71234567890000000",
      "8 12 345 67 890",
      "+7            ;",
      "8 23         ;",
      "+7-1-2-3-4-5-6-7-8-9-0",
      "8-----------------",
      "8 999 999",
      "+7 - — — —-",
      "+7123 4567 890",
      "8--------123456-------789------------------0123",
      "9091234567",
      "909 123 45 67",
      "909-123-45-67 ",
    ];

    falseNumbers.forEach((number) => {
      expect(checkPhone(number)).toBeFalsy();
    });
  });
});
