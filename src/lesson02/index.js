// 1
// let a = 5;
// let b = 7;
export function isGreater(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a > b ? a : b;
  }
  return "a or b is not a number";
}
// console.log(isGreater(a, b));

// 2

// let input = prompt("Type a number between 1 and 12 :");

export function monthName(input) {
  const index = parseInt(input, 10);
  let name = '';
  switch (index) {
    case 1:
      name = "January";
      break;
    case 2:
      name = "February";
      break;
    case 3:
      name = "March";
      break;
    case 4:
      name = "April";
      break;
    case 5:
      name = "May";
      break;
    case 6:
      name = "June";
      break;
    case 7:
      name = "July";
      break;
    case 8:
      name = "August";
      break;
    case 9:
      name = "September";
      break;
    case 10:
      name = "October";
      break;
    case 11:
      name = "November";
      break;
    case 12:
      name = "December";
      break;
    default:
      return "It should be a number between 1 and 12";
  }
  return name;
}
// 3
// const circleArea = 28;
// const squareArea = 50;

export function compare(circle, square) {
  if (
    typeof circle === "number" &&
    !Number.isNaN(circle) &&
    typeof square === "number" &&
    !Number.isNaN(square)
  ) {
    // side of the square
    const a = Math.sqrt(square);
    // diameter of circle
    const d = Math.sqrt(circle / Math.PI) * 2;
    if (a === 0 || d === 0) {
      return "one of values is 0";
    } if (d <= a) {
      return "can be inscribed";
    } if (d > a) {
      return "cannot be inscribed ";
    }
  }
  return "values should be numbers";
}

// compare(circleArea, squareArea);
