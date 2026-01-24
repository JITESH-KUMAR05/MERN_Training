// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};
let copiedUser = {...user};
console.log(user);
console.log(copiedUser);
copiedUser.name="raju";
copiedUser.preferences.theme="light"; // this is changing the theme in both as the object is not a plane object and the inner object reference is there in the copy so using this reference we are changing the theme on the actual location
console.log(user);
console.log(copiedUser);

