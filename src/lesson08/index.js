// 1`
// сколько минут прошло сначала дня
const date1 = new Date();
const minutes = date1.getHours() * 60 + date1.getMinutes();
console.log(date1);
// console.log(minutes.toFixed(1));

// 2
// кто старше
const p1 = "21.03.1987";
const p2 = "22.04.1987";

const converter = function (date) {
  const [day, month, year] = date.split(".");
  return new Date(`${year}-${month}-${day}`);
};

const compare = function (p1, p2) {
  let num;
  if (p1 - p2 < 0) {
    num = 1;
  } else if (p1 - p2 > 0) {
    num = 2;
  } else if (p1 - p2 === 0) {
    return "они ровесники";
  }
  return `${num} старше`;
};

const newP1 = converter(p1);
const newP2 = converter(p2);
// console.log(compare(newP1, newP2));
