let firstNumber = prompt("Enter the first integer number:");
let secondNumber = prompt("Enter the second integer number:");

// Parsing the user input to integers
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

// Check if the user entered valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  // Calculate the sum
  let sum = firstNumber + secondNumber;
  alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);
} else {
  alert("Invalid input. Please enter valid integer numbers.");
}