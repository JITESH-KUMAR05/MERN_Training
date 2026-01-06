// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
let res1 = students.filter((element)=>element.marks>=40);
console.log(res1);
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let res2 = students.map((element)=>{
    if(element.marks>=90){
        return {
            id:element.id,
            name:element.name,
            marks:element.marks,
            grace:'A'
        }
    }
    else if(element.marks>=75){
        return {
            id:element.id,
            name:element.name,
            marks:element.marks,
            grace:'B'
        }
    }
    else if(element.marks>=60){
        return {
            id:element.id,
            name:element.name,
            marks:element.marks,
            grace:'C'
        }
    }
    else{
        return {
            id:element.id,
            name:element.name,
            marks:element.marks,
            grace:'D'
        }
    }
})
console.log(res2);

//    3. reduce() to calculate average marks
let res3 = students.reduce((accumulator,element)=>accumulator+element.marks,0);
res3 /= students.length;
console.log(res3);
//    4. find() the student who scored 92
let res4 = students.find((element)=>element.marks===92);
console.log(res4);
//    5. findIndex() of student "Kiran"
let res5 = students.findIndex((element)=>element.name==='Kiran');
console.log(res5);