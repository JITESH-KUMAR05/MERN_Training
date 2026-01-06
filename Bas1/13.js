// Operations on array of objects 

// student 
let students = [
    {sno:1,name:"ravi",age:21},
    {sno:2,name:"vikas",age:19},
    {sno:3,name:"manoj",age:15},
    {sno:4,name:"madhu",age:30},
]

// find students age less than 20

let res1 = students.filter((studentObj)=>studentObj.age<20);
console.log(res1);

// increment age by 2 years for manoj
let res2 = students.map((studentObj)=>{
    if(studentObj.name==='manoj'){
        return {
            sno:studentObj.sno,
            name:studentObj.name,
            age:studentObj.age+2
        }
    }
    return studentObj;
})
console.log(res2);


//  find the sum of ages of all the students 
console.log(students);
let res3 = students.reduce((accumulator,studentObj)=>accumulator+studentObj.age,0);
console.log(res3);
let res4 = students.reduce((accumulator,studentObj)=>{
    return accumulator+studentObj.age;
},0);
console.log(res4);