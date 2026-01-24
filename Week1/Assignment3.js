// Assignment 3: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
const temperatures = [32, 35, 28, 40, 38, 30, 42];
let tempAbove35 = temperatures.filter((element)=>element>35);
let inFern = temperatures.map((element)=>2*element +  30);
let avgTemp = temperatures.reduce((accumulator,element)=>accumulator+element);
avgTemp /= temperatures.length;
let tempAbove40 = temperatures.find((element)=>element>40);
let findid = temperatures.findIndex((element)=>element===28);
console.log(temperatures)
console.log(tempAbove35);
console.log(inFern)
console.log(avgTemp)
console.log(tempAbove40)
console.log(findid)