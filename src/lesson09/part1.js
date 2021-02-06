export function longerSide(a, b, c) {
  if (a && b && c) {
    // check the longer side
    if (a > b) {
      if (a > c) {
        return a;
      }
      return c;
    }
    if (b > c) {
      return b;
    }
    return c;
  }

  return "wrong value";
}

export function compare(value1, value2, hypotenuse) {
  if (value1 ** 2 + value2 ** 2 === hypotenuse ** 2) {
    return true;
  }
  return false;
}

export function isRightTriangle(a, b, c) {
  switch (longerSide(a, b, c)) {
    case c:
      return compare(a, b, c);
    case a:
      return compare(c, b, a);

    case b:
      return compare(c, a, b);
    default:
      return "wrong value";
  }
}
