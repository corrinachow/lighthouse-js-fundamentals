function lastIndexOf(array, value) {
  var arrayBackwards = [];

  for (var i = array.length - 1; i >= 0; i--) {
    arrayBackwards.push(array[i])
  }
  for (var p = 0; p <= array.length; p++) {
    if (arrayBackwards[p] === value) {
      return array.length - p - 1;
    } else if (array.includes(value) === false) {
    return -1
  }
}
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
