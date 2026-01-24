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
// marks[computer]=90; this is not the right way to do this 
console.log(marks)



// Assignment 3: Application Settings Controller
// ---------------------------------------------
// Scenario : A web app stores user preferences as settings.

// Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


console.log("\n",settings);
// Tasks :
//     1.Toggle theme between "light" and "dark"
if(settings.theme==='light'){
  settings.theme='dark';
}
else{
  settings.theme='light';
}
//     2. Turn autoSave to true
settings.autoSave=true;
//     3. Remove the notifications setting
delete settings.notifications;
//     4. Freeze the settings object so it cannot be modified
Object.freeze(settings)
console.log(settings);