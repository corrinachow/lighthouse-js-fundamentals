function isOdd(num) {
  if (Number.isInteger(num) === false) {
  } else {
    return num % 2 !== 0;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("0 is odd: " + isOdd(0));
console.log("-1 is odd: " + isOdd(-1));
console.log("0.6786 is odd: " + isOdd(0.6786));