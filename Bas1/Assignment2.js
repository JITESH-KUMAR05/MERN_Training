// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
    
// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let totalMarks = 0;
let high = -900;
for(let v in marks){
    if(marks[v] > high){
        high = marks[v];
    }
    totalMarks += marks[v];
}
console.log(totalMarks);
let avg = totalMarks / Object.keys(marks).length;
console.log(avg);
marks.computer = 90;
// marks[computer]=90;
console.log(marks)