let student = {
    rollNo:1,
    name:"ravi",
}

console.log(student.rollNo) // 1;
console.log(student.name) // ravi
console.log(student.city) // undefined
// console.log(student.city.length) // undefined.length --> error
// we will solve this with the help of optional chaining 
// console.log(student.city?.length) // just question mark is added 
// the above one works 
console.log(student.city?.length ?? "property is not existed") // nulish coelencing 