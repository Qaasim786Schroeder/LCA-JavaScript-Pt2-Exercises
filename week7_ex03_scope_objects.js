// ==========================================================================
// TODO: Create a global variable called globalCount.
// ==========================================================================
let globalCount = 10;

// ==========================================================================
// TODO: Create a function that demonstrates local scope.
// ==========================================================================
function demonstrateLocalScope() {
  // This variable is local to this function and cannot be accessed outside
  let localMessage = "I am only visible inside this function!";
  console.log("Inside demonstrateLocalScope -> localMessage:", localMessage);
  console.log(
    "Inside demonstrateLocalScope -> Accessing globalCount:",
    globalCount,
  );
}

// ==========================================================================
// TODO: Create a function that tries to modify both variables.
// ==========================================================================
function modifyVariables() {
  // Modifying the global variable (this will work globally)
  globalCount = 25;
  console.log(
    "Inside modifyVariables -> Successfully updated globalCount to:",
    globalCount,
  );

  // Attempting to modify 'localMessage' from the other function
  try {
    // This will throw an error because localMessage is not in this scope
    localMessage = "Trying to change you!";
  } catch (error) {
    console.log(
      "Inside modifyVariables -> Cannot modify localMessage:",
      error.message,
    );
  }
}

// Run scope demonstration
console.log("--- Scope Demonstration ---");
demonstrateLocalScope();
modifyVariables();
console.log("Outside functions -> Final globalCount value:", globalCount);
console.log("--------------------------------\n");

// ==========================================================================
// TODO: Create a Student constructor function.
// ==========================================================================
function Student(firstName, lastName, age, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.course = course;
  this.getGreeting = function () {
    return `Hi, I am ${this.firstName} ${this.lastName}, studying ${this.course}.`;
  };
}

// ==========================================================================
// TODO: Create several student instances.
// ==========================================================================
const student1 = new Student(
  "Qaasim",
  "Schroeder",
  20,
  "Frontend Web Development",
);
const student2 = new Student("Jane", "Doe", 22, "Data Science");
const student3 = new Student("Alex", "Smith", 19, "Cyber Security");

// Logging student instances
console.log("--- Student Instances ---");
console.log(student1.getGreeting());
console.log(student2.getGreeting());
console.log(student3.getGreeting());
console.log("--------------------------\n");

// ==========================================================================
// TODO: Create an object literal with nested properties.
// ==========================================================================
const academyDetails = {
  academyName: "Life Choices Academy",
  cohort: "YouthCode Off-Site Cohort 2",
  location: {
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa",
  },
  modules: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  isActive: true,
};

// Logging nested properties
console.log("--- Object Literal with Nested Properties ---");
console.log("Academy:", academyDetails.academyName);
console.log("City Location:", academyDetails.location.city);
console.log("Primary Module:", academyDetails.modules[2]); // JavaScript
console.log("--------------------------------------------");
