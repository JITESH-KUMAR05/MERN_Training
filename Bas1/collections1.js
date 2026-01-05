//  Array(ordered collection)

let marks = [90,89,85];
let skills = ['html','javascript','angular'];

console.log(marks); // marks is not a name for object
console.log(skills);

// objects does't have name they have only reference variable
// access elements

console.log(marks[0])
console.log(marks[1])
console.log(marks[10])

// accessing all the elements of the array 
// iteration
// for loop, while loop,

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
/*
Some Errors
// for(let mark:marks){
//     console.log(mark);
// }

// marks.forEach(marks,{
//     console.log(mark)
// })
*/
//  for of loop
// limitation -> element based actions can be done but index based cannot be done
console.log("For of loop")
for(let mark of marks){
    console.log(mark);
}
function smallest(mrks){
    let small = marks[0];
    for(let v of mrks){
        if(v < small){
            small = v;
        }
    }
    return small;
}

// Task
console.log("Task")
let summ = 0;
let minn = 9999;
for(let mark of marks){
    summ += mark;

}

console.log("Sum is: ",summ);
console.log("Smallest is:",smallest(marks));
// write a function that receives marks array as the argument and returns the smallest element --> Solved above


/* 
write a function that reveives "skill" array and skillName
as arguments and return the index if skillName existed,otherwise
"Skill not found"
*/


skills = ["skill","angular","nodejs","java"];

function findSkill(skills,skillName){
    for(let skill of skills){
        if(skill === skillName){
            let id = skills.indexOf(skill);
            return id;
        }
    }
    return "Skill not found";
}


// call function
console.log("finding the index task");
console.log(skills);
let result = findSkill(skills,"java");
console.log(result);