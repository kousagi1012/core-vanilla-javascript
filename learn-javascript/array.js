let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert(fruits.length);
// 4 because shoppingCart is pointing at the same object in memory; push mutates that object

// Create an array styles with items “Jazz” and “Blues”.
let styles = ['Jazz', 'Blues']
// Jazz, Blues

// Append “Rock-n-Roll” to the end.
styles.push('Rock-n-Roll')
// Jazz, Bues, Rock-n-Roll

// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[(styles.length - 1) / 2] = 'Classics'
// Jazz, Classics, Rock-n-Roll

// Strip off the first value of the array and show it.
styles.splice(0, 1)
// Classics, Rock-n-Roll

// Prepend Rap and Reggie to the array.
styles.unshift('Rap', 'Reggie')
// Rap, Reggie, Classics, Rock-n-Roll

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
})

arr[2]();
// Will invoke the function and create an alert with the array object

// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
function sumInput() {
  let input = []
  while (true) {
    let values = prompt('Input number', 0)
    if (values === "" || values === null || !isFinite(values)) {
      break;
    }
    input.push(+values)
  }
  let sum = 0
  for (let number of input) {
    sum += number
  }
  return sum
}

// finds the contiguous subarray of arr with the maximal sum of items. returns sum 0 if all numbers are negatvie
function getMaxSubSum(arr) {
  let sum = 0
  let partialSum = 0
  for (let item of arr) {
    partialSum += item
    sum = Math.max(sum, partialSum)
    if (partialSum < 0) partialSum = 0
  }
  return sum
}