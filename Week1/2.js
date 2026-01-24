// operators

let a = 10;
let b = 5;

console.log(a / b);
console.log(a % b);

/*
=      -> this is for assignment
==     -> this is for comparison
===    -> this is for strict equality
*/

let x = 100;
let y = "100";
console.log(x == y); // equality

console.log(x === y); // strict equality

function checkLogin(isLoggedIn, isProfileComplete) {
  if (isLoggedIn === false) {
    return "Please Login";
  } else if (isProfileComplete === false) {
    return "Complete your profile";
  } else {
    return "Welcome back!";
  }
}

function labelTag(price){
    if(price < 500){
        return "Budget Course";
    }
    else if(price <= 1000){
        return "Standard Course";
    }
    else{
        return "Premium Course";
    }
}

let isLoggedIn = true;
let isProfileComplete = false;

let message = checkLogin(isLoggedIn,isProfileComplete);
console.log(message);
console.log(checkLogin(false,true));
console.log(checkLogin(false,false));

console.log(labelTag(1299));
console.log(labelTag(499));
console.log(labelTag(599));