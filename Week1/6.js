// Object operations 
// Access , iterating , insert, delete,update

let emp={
    eno:1,
    name:"ravi",
}

// Accessing props
console.log(emp.eno); // 1

// Adding new property (Dynamic operation)
console.log("adding a property");
emp.city = "Hyd";

console.log(emp);

// updating a property
console.log("updating a property")
emp.eno = 123
console.log(emp)


// Deleting a property
console.log("Deleting a property");
delete emp.city;
console.log(emp)

// freeze the object then it will not modified by any other program
console.log("freezing  the object");
Object.freeze(emp);
emp.eno=1234 // not getting updated as it's freezed already
emp.mobile=91929393 // not get added
console.log(emp)


//  read key
console.log("keys")
console.log(Object.keys(emp)); // [eno, name]

//  read valaaues
console.log("values")
console.log(Object.values(emp)); // [123,'ravi']