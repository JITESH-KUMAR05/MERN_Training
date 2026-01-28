let obj = {
    a:10,
    b:20
}

// create a copy

// let copyObj = obj;// this is the wrong approach
let copyObj = {...obj};

// check
obj.a = 1234; 

console.log("obj: ",obj);
console.log("copy obj: ",copyObj);

let student1={
    collegeName:"Anurag University",
    collegeAddress:{
        street:"uppal",
        pincode:500088
    },
    studentAddress:{
        street:"kphb"
    }
}

// let student2 = {...student1};

// student1.collegeName="abcd";
// student1.studentAddress.street="miyapur";
// console.log(student1);
// console.log(student2);

// this will not work as the object is not a plain object 

let student2 = structuredClone(student1);
student1.collegeName="abcd";
student1.studentAddress.street="miyapur";
console.log(student1);
console.log(student2);