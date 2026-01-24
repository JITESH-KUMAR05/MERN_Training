// Assignment 4: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

const courses = ["javascript", "react", "node", "mongodb", "express"];
let nameLengthGrt5 = courses.filter((element)=>element.length>5);
console.log(nameLengthGrt5);
let uppercaseCourse = courses.map((element)=>element.toUpperCase());
console.log(uppercaseCourse);
let reducingIt = uppercaseCourse.reduce((acc,ele)=>acc + " | " + ele);
console.log(reducingIt);
let ReactRes = courses.find((element)=>element==='react');
console.log(ReactRes);
let nodeId = courses.findIndex((element)=>element==='node');
console.log(nodeId)