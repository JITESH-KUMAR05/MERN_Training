// Advance operations on arrays
//  filter,map,forEach,reduce,find,findIndex,sort or toSorted

let marks = [90,40,50,20,89]
// filter(selection)
// get all marks less than 50
let res = marks.filter(function(element){
    return element > 70
})

console.log(res)

// write a function that can extract marks > 70 , pack them into an array and return it 
let arr = [];
function marksGrt(marks){
    for(let mark of marks){
        if (mark > 70){
            arr.push(mark);
        }
    }
}
marksGrt(marks);
console.log(arr);
// Arrow function
res = marks.filter((element)=> element > 70);
console.log(res);

// find all marks between 30 and 90
let res2 = marks.filter(function(element){
    return (element > 30 && element < 90);
})
console.log(res2);

res2 = marks.filter((element)=>(element > 30 && element < 90));
console.log(res2);

res2 = marks.filter((element)=>{
    element > 30 && element < 90
});
console.log(res2);


// map (transforma or modify)
let salaries = [100,200,300];
// add 50 to each salary
let res3 = salaries.map(function(element){
    return element+50;
})

console.log(res3);

// unchanged salaries we will get as filter is only for selection
let res4 = salaries.filter((element)=>element+50);
console.log(res4);

// map is for modification and transformation

// let marks = [90,40,50,20,89]
let result1 = marks.filter((element)=> element < 70);
console.log(result1);


// modification add 5 mark to each
let result2 = marks.map((element)=> element+5);
console.log(result2);


// Reduce ---> to perform aggregation
    // find sum of marks
// let summ = Math.sum(marks);
// console.log(summ);
let result3 = marks.reduce((accumulator,element)=>accumulator+element);
console.log(result3);

// finding the smallest element from marks using reduce
console.log(marks);
let small = marks.reduce((accumulator,element)=>accumulator<element?accumulator:element);
console.log(small);
let small2 = 999;
for(let val of marks){
    if(val<small2){
        small2=val;
    }
}
console.log(small2);



// find element
// find 50
// name of func,how many params,what does it return
let result4 = marks.find((element)=>element===50); // if not found then undefined
console.log(result4);

let result5 = marks.findIndex((element)=>element===50); // if not found then -1
console.log(result5);