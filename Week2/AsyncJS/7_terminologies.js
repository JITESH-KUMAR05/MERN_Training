// API's
// JSON

let student = {
    sno:1,
    name:'ravi',
    age:19
}
console.log(typeof(student));

// let studentJson = {
//     "sno":1,
//     "name":'ravi',
//     "age":19
// }

// JS object to JSON
let studentJson = JSON.stringify(student);
console.log(studentJson)
console.log(typeof(studentJson));

// JSON to JS object
let JsObject = JSON.parse(studentJson)
console.log(JsObject);
