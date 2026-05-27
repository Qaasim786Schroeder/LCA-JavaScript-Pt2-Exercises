// ==========================================
// TASK 1: Sum Function
// ==========================================
// Calculates the sum of all numbers from 0 up to the parameter.
// Checks if the parameter is an integer without using Number.isInteger() or regex.
function sum(num) {
  // Check if the value is a number type and is a whole number (integer)
  if (typeof num !== "number" || isNaN(num) || num % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

// Testing Task 1
console.log("--- Task 1: Sum ---");
console.log(sum(5)); // Output: 15 (0+1+2+3+4+5)
console.log(sum("hello")); // Output: "The value passed is not a number"
console.log(sum(5.5)); // Output: "The value passed is not a number"

// ==========================================
// TASK 2: Factorial Function
// ==========================================
// Prints the factorial calculation and result of the entered number.
function factorial(num) {
  if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }

  if (num === 0 || num === 1) {
    console.log(`factorial(${num}) outputs ${num} which equals 1`);
    return;
  }

  let result = 1;
  let calculationString = "";

  for (let i = num; i >= 1; i--) {
    result *= i;
    calculationString += i === 1 ? `${i}` : `${i}*`;
  }

  console.log(
    `factorial(${num}) outputs ${calculationString} which equals ${result}`,
  );
}

// Testing Task 2
console.log("\n--- Task 2: Factorial ---");
factorial(4); // Output: factorial(4) outputs 4*3*2*1 which equals 24

// ==========================================
// TASK 3: FunkyMath Function
// ==========================================
// Performs different calculations based on the number of arguments provided.
function funkyMath(...args) {
  const totalArgs = args.length;

  if (totalArgs === 2) {
    // Subtract the first from the second
    return args[1] - args[0];
  } else if (totalArgs === 3) {
    // Add all 3 numbers together
    return args[0] + args[1] + args[2];
  } else if (totalArgs === 4) {
    // Add arg 1 & 2, add arg 3 & 4, then divide them
    const group1 = args[0] + args[1];
    const group2 = args[2] + args[3];
    return group1 / group2;
  } else {
    return "Invalid number of arguments. Please pass 2, 3, or 4 numbers.";
  }
}

// Testing Task 3
console.log("\n--- Task 3: FunkyMath ---");
console.log(funkyMath(5, 20)); // 2 arguments: 20 - 5 = 15
console.log(funkyMath(1, 2, 3)); // 3 arguments: 1 + 2 + 3 = 6
console.log(funkyMath(8, 2, 3, 5)); // 4 arguments: (8 + 2) / (3 + 5) = 1.25

// ==========================================
// TASK 4: Array Filter and Sort (Odd Numbers)
// ==========================================
const originalArray = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

// Loop through the array to find and remove odd numbers
for (let i = originalArray.length - 1; i >= 0; i--) {
  if (originalArray[i] % 2 !== 0) {
    // Add to the new array
    oddNumbers.push(originalArray[i]);
    // Remove from the original array
    originalArray.splice(i, 1);
  }
}

// Bonus: Arrange the odd numbers from smallest to biggest
oddNumbers.sort((a, b) => a - b);

// Testing Task 4
console.log("\n--- Task 4: Array Filtering ---");
console.log("Remaining Even Array:", originalArray); // Output: [2, 6, 44]
console.log("Sorted Odd Array:", oddNumbers); // Output: [1, 33, 45]

// ==========================================
// TASK 5, 6 & 7: Objects
// ==========================================
// Task 5: Create object
const me = {
  firstName: "Qaasim",
  lastName: "Schroeder",
  age: 23,
  favouriteColour: "Blue",
  dreamCar: "Nissan GT-R R34",
};

// Task 6: Add property 'favourite food'
me["favourite food"] = "Gatsby";

// Task 7: Delete the 'age' property
delete me.age;

// Testing Tasks 5, 6 & 7
console.log("\n--- Tasks 5, 6 & 7: Object Manipulations ---");
console.log(me);
