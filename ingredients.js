var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a for loop that prints out the contents of ingredients:
console.log("While List")
var i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
console.log("For List")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("For List Backwards")
for (var i = 7; i > -1; i--) {
  console.log(ingredients[i]);
}