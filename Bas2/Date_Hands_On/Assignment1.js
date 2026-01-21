// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

// new date object with current date and time
let currDate = new Date(Date.now());
// logging the year
console.log(currDate.getFullYear());
// logging the month
console.log(currDate.getMonth());
// logging the date
console.log(currDate.getDate());
// logging the days of week
console.log(currDate.getDay());
// hour min sec
console.log(currDate.getHours(),currDate.getMinutes(),currDate.getSeconds());
// in the required format DD-MM-YYYY HH:mm:ss
let date = currDate.getDate();
let month = currDate.getMonth();
let year = currDate.getFullYear();
let hour = currDate.getHours();
let min = currDate.getMinutes();
let sec = currDate.getSeconds();
console.log(date,'-',month,'-',year,' ',hour,':',min,':',sec);
console.log(currDate);
