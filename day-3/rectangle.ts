function Rectangle(a: number, b: number) {
  var rectangle = { length: a, width: b, area: a * b, perimeter: (a + b) * 2 };
  return rectangle;
}
console.log(Rectangle(11, 22));
