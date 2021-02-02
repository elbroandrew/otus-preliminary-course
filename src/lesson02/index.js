// 1
const a = 5;
const b = 7;
console.log(a > b ? a : b);

// 2

const input = prompt("Введите число от 1 до 12: ");
const x = parseInt(input);
switch (x) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Введите число от 1 до 12.");
    break;
}

// 3
const circleSquare = 28;
const squareSquare = 50;

const compare = (circle, square) => {
  // side of the square
  const a = Math.sqrt(square);
  // diameter of circle
  const d = Math.sqrt(circle / Math.PI) * 2;
  if (d <= a) {
    return "круг можно вписать в квадрат";
  }
  if (d > a) {
    return "круг нельзя вписать в квадрат";
  }
};

compare(circleSquare, squareSquare);
