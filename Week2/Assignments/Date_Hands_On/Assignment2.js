// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
//       let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid

let enrollmentDeadline = new Date("2026-01-20");
function enrollmentStatus(current) {
  if (current < enrollmentDeadline) {
    console.log("Enrollment open");
  } else {
    console.log("Enrollment Closed");
  }
}

// doing validation for the given input
let forToday = enrollmentStatus(Date.now());
let forInput = enrollmentStatus("2026-02-30");

