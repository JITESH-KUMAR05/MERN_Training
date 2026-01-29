// unpacking the object 
let test = {
    a:10,
    b:20,
    c:30,
    d:40
}

//  unpacking object (destructuring)
let {a,b,c,d} = test; // the variable names should be same as the property name if we use x in place of a then it will give undefined
console.log(a);
console.log(b);
// this is good only if the object size is small


// Complex object 

let student = {
    sno:100,
    name:"bhanu",
    marks:[90,89,88],
    address:{
        city:"hyderabad",
        pincode:500088
    },
    getAverage:function(){ // this is an anonymous function as name is not there
        // object processing business logic
        // console.log("Hello");
        // console.log(this.marks[0]);
        let avg = 0;
        for(let val of this.marks){
            avg += val;
        }
        avg = avg / (this.marks.length);
        console.log(avg);
    }
}


console.log(student.marks);
console.log(student.address.city);
console.log(student.getAverage());

// data = [1,2,3,4];
// for(let val in data){ // giving index
//     console.log(val);
// }