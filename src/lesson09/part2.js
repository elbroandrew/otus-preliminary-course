export function circleArea(radius) {
  const circle = {};
  if (radius > 0) {
    circle.area = (Math.PI * radius ** 2).toFixed(1);
    circle.circumference = (Math.PI * radius * 2).toFixed(1);
    return circle;
  }
  return "radius cannot be less then 0";
}
