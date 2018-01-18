function range(start, end, step) {
  var output = [];
  var i = start;

  if (step > 0) {
    while (i <= end) {
      output.push(i);
      i += step;
    }
  } else {
    while (i >= end) {
      output.push(i);
      i += step;
    }
  }
  return output;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, -2));