// Advance operations on arrays
//  filter,map,forEach,resuce,find,findIndex,sort or toSorted

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

