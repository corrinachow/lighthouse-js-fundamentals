var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients using while loop:")
var counter = 0
while (counter < ingredients.length) {
  console.log(ingredients[counter])
  counter ++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients using for loop:")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients, but backwards:")
for (var b = ingredients.length - 1; b >= 0; b--) {
  console.log(ingredients[b]);
}