// ==========================================================================
// TODO: Create a multiline string using template literals.
// ==========================================================================

const multilineBio = `Hi there! I am a trainee at Life Choices Academy.
Currently, I am diving deep into JavaScript Part 2.
Template literals make formatting multi-line strings incredibly clean!`;

console.log("--- Multiline String Output ---");
console.log(multilineBio);
console.log("\n");

// ==========================================================================
// TODO: Create a function that uses template literals for HTML generation.
// ==========================================================================

function generateProfileCard(name, role, cohort) {
  return `
        <div class="card">
            <h2>${name}</h2>
            <p class="role">Role: ${role}</p>
            <p class="cohort">Cohort: ${cohort}</p>
        </div>
    `;
}

console.log("--- Generated HTML Output ---");
console.log(
  generateProfileCard(
    "Alex",
    "Frontend Developer",
    "YouthCode Off-Site Cohort 2",
  ),
);
console.log("\n");

// ==========================================================================
// TODO: Convert regular functions to arrow functions.
// ==========================================================================

// Regular Function 1
function squareNumber(num) {
  return num * num;
}

// Converted to Arrow Function (Implicit return)
const squareNumberArrow = (num) => num * num;

// Regular Function 2
function greetUser(firstName, lastName) {
  return `Welcome back, ${firstName} ${lastName}!`;
}

// Converted to Arrow Function
const greetUserArrow = (firstName, lastName) =>
  `Welcome back, ${firstName} ${lastName}!`;

console.log("--- Arrow Function Conversions ---");
console.log(`Square of 5: ${squareNumberArrow(5)}`);
console.log(greetUserArrow("John", "Doe"));
console.log("\n");

// ==========================================================================
// TODO: Use arrow functions with array methods.
// ==========================================================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Using .filter() with an arrow function to get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// 2. Using .map() with an arrow function to double the even numbers
const doubledEvens = evenNumbers.map((num) => num * 2);

console.log("--- Array Methods with Arrow Functions ---");
console.log("Original Array:", numbers);
console.log("Filtered (Even Numbers):", evenNumbers);
console.log("Mapped (Doubled Evens):", doubledEvens);
