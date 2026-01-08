//  HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------

// Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;
let message = "";
// Tasks:
//    1. If user is not logged in → show "Please login"
if(!isLoggedIn){
    message = "please login";
}
//    2. If logged in but profile incomplete → show "Complete your profile"
else if(!isProfileComplete){
    message = "Complete your profile";
}
//    3. If logged in and profile complete → show "Welcome back!"
else{
    message = "Welcome back!"
}
//    4. Store the result in message
//    5. Print the message
console.log(message);





// HANDS-ON 2: Course Price Tag Labeler
// ------------------------------------
// Initial data:
     let price = 1299;

// Tasks:
//    1. If price < 500 → "Budget Course"
//    2. If price between 500–1000 → "Standard Course"
//    3. If price > 1000 → "Premium Course"
//    4. Store label in courseTag
//    5. Print the label



// HANDS-ON 3: Enrollment Eligibility Checker
// ------------------------------------------
// Initial data:
//     let hasPaid = true;
//     let hasCompletedBasics = false;

// Tasks:
//    1. If both conditions are true → "Enroll Now"
//    2. Otherwise → "Complete Requirements"
//    3. Use ternary operator
//    4. Store result in enrollMessage
//    5. Print message