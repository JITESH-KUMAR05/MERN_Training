// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
// const user = {
//   id: 101,
//   name: "Ravi",
//   email: "ravi@gmail.com",
//   role: "student",
//   isActive: true
// };

// Tasks:
    
// Read and print the user’s name and email
// Add a new property lastLogin: "2026-01-01"
// Update role from "student" to "admin"
// Delete the isActive property
// Use Object.keys() to list all remaining fields

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name);
console.log(user.email);
user.role="admin"
delete user.isActive
console.log("Keys:",Object.keys(user));
console.log(user)