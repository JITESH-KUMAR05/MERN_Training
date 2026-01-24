// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
//     let dob = "2000-05-15";


// Tasks:
//         1. Calculate exact age in years

let dob = "2000-05-18";
let dobDate = new Date(dob)
let today = new Date("2005-07-11");
// console.log(dobDate.toString());
// console.log(today.toString());
// console.log(today.getMonth());
let years = today.getFullYear()-dobDate.getFullYear();
let months = today.getMonth() - dobDate.getMonth();
if(months < 0){
    years--;
    months += 12;
}
let days = today.getDate()-dobDate.getDate();
if(days<0){
    months--;
    let lastDay = new Date(today.getFullYear(),today.getMonth(),0);
    // console.log(lastDay);
    lastDay = lastDay.getDate();
    days = days + lastDay;
    
}
console.log(years);
console.log(months);
console.log(days);