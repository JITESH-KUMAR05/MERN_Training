// objects (pack of properties)

let empObject = {
    empNo:100,
    name: "ravi",
    age: 23,
}


// accessing properties 
console.log("object properties");
console.log(empObject.empNo);
console.log(empObject.name);
console.log(empObject.age)
console.log(empObject.city) // leads to undefined as it doesn't exist

console.log("object properties data types");
console.log(typeof empObject.empNo);
console.log(typeof empObject.name);
console.log(typeof empObject.age)

// iterate an object 
console.log("Iterating an object using for in loop");
// for in loop

for(let v in empObject){
    // console.log("v ",v);
    // console.log(empObject.v); this will give 3 undefined
    console.log(v, " is ",empObject[v]);
}

console.log("Task")
// task
//  create student object with props rollNo,name,age,city
// create product obj with props product Name, brand,price


let student = {
    rollNo:21,
    name:"jitesh",
    age:21,
    city:"Hyd"
}

let product = {
    prdName:"Iphone",
    brand:"Apple",
    price:100000
}