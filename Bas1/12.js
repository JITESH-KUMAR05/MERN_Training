// function declaration

function findsum(a,b){
    return a+b;
}

// function expression
let findsum1 = function(a,b){
    return a+b;
}

// Arrow function --> when the body of the function is 1 line then we can simplify that using arrow function
let findsum2=(a,b)=>a+b;

console.log(findsum2(5,5));