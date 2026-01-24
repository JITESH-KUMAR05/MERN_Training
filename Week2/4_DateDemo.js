// create Date

let date1 = new Date();

console.log("date 1 is ",date1);
console.log(date1.getDate())
console.log(date1.toString());


let date2 = new Date('2022-1-12');
console.log(date2);

let date3 = new Date(2022,2,13);
console.log(date3);

let date4  = new Date(2022,0); //first day of month

let date5 = new Date(2022,0,0); //last day of previous month

let date6 = new Date(Date.now());