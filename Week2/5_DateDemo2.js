let date1 = new Date(2022,0,5)
let date2 = new Date(2024,4,1)

//  find difference

if(date1>date2){
    // let temp = temp2;
    // temp2 = temp1;
    // temp3 = temp;
    [date1,date2] = [date2,date1];
}

// find years
let years = date2.getFullYear()-date1.getFullYear();
console.log("Years :",years);
// find months
let months = date2.getMonth()-date1.getMonth();
if(months < 0){
    years--;
    months += 12;
}
console.log("months: ",months);
// find days
let days = date2.getDate()-date1.getDate();
if(days < 0){
    months--;
    days += Date(date1.getFullYear,date1.getMonth(),0)
    // get no of days of previous month of date2
    //  add those days 
}
console.log("days: ",days);