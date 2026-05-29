// ==========================================
// 1. USER INPUT VALIDATION
// ==========================================

// Validates if a username is between 3 and 15 characters long
function validateUsername(username) {
  if (typeof username !== "string") {
    return "Error: Input must be a string.";
  }

  let trimmedName = username.trim();

  if (trimmedName.length === 0) {
    return "Error: Username cannot be empty.";
  }
  if (trimmedName.length < 3) {
    return "Error: Username is too short (minimum 3 characters).";
  }
  if (trimmedName.length > 15) {
    return "Error: Username is too long (maximum 15 characters).";
  }

  return "Username is valid!";
}

// ==========================================
// 2. MULTIPLE ERROR TYPES DEMONSTRATION
// ==========================================

// Triggers different JavaScript errors based on a number input
function demonstrateErrors(errorType) {
  try {
    if (errorType === 1) {
      // ReferenceError: Using a variable that does not exist
      console.log(nonExistentVariable);
    } else if (errorType === 2) {
      // TypeError: Trying to do something impossible for that data type
      let number = 42;
      number.toUpperCase();
    } else if (errorType === 3) {
      // RangeError: Passing a value that is out of range
      let array = new Array(-5);
    } else {
      console.log("No error triggered. Everything is fine!");
    }
  } catch (error) {
    // Catch the error and print its type and message clearly
    console.log("Caught an error!");
    console.log("Error Name: " + error.name);
    console.log("Error Message: " + error.message);
  }
}

// ==========================================
// 3. STRING MANIPULATION HELPERS
// ==========================================

// Reverses a string
function reverseString(text) {
  return text.split("").reverse().join("");
}

// Capitalizes the very first letter of a string
function capitalizeFirstLetter(text) {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Counts how many vowels (a, e, i, o, u) are in a string
function countVowels(text) {
  let count = 0;
  let lowerText = text.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < lowerText.length; i++) {
    if (vowels.includes(lowerText[i])) {
      count++;
    }
  }
  return count;
}

// ==========================================
// 4. ARRAY OPERATION HELPERS
// ==========================================

// Finds the biggest number in an array
function findMaxNumber(numbersArray) {
  if (numbersArray.length === 0) return null;
  return Math.max(...numbersArray);
}

// Removes duplicate items from an array
function removeDuplicates(array) {
  return [...new Set(array)];
}

// Calculates the average of all numbers in an array
function calculateAverage(numbersArray) {
  if (numbersArray.length === 0) return 0;

  let total = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }
  return total / numbersArray.length;
}

// ==========================================
// EXAMPLES OF HOW IT WORKS (Optional Testing)
// ==========================================
console.log("--- Input Validation Test ---");
console.log(validateUsername("Qa"));
console.log(validateUsername("Qaasim"));

console.log("\n--- Error Demonstration Tests ---");
demonstrateErrors(1); // Triggers ReferenceError
demonstrateErrors(2); // Triggers TypeError

console.log("\n--- String Helpers Test ---");
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Vowels in 'coding':", countVowels("coding"));

console.log("\n--- Array Helpers Test ---");
console.log("Max number:", findMaxNumber([10, 5, 23, 8]));
console.log("No duplicates:", removeDuplicates([1, 2, 2, 3, 3, 4]));
