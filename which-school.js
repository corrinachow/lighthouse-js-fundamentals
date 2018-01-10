function whichSchool(age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13    &&    age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log("I am 18. Which school should I go to?");
console.log(whichSchool(18));
console.log("I am 12. Which school should I go to?");
console.log(whichSchool(12));
console.log("I am 67. Which school should I go to?");
console.log(whichSchool(67));
