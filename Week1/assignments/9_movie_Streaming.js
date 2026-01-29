// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let res1 = movies.filter((element)=>element.genre==='Sci-Fi');
console.log(res1);
//     2. map() to return:
//             "Inception (8.8)"
// little confused how to do this 
let resStr = "";
let res2 = movies.map((element)=>element.id===1? resStr + element.title + " (" + toString(element.rating) + " )":resStr);
console.log(resStr)
//     3. reduce() to find average movie rating
let res3 = movies.reduce((accumulator,movieObj)=>accumulator+movieObj.rating,0);
res3 /= movies.length;
console.log(res3);
//     4. find() movie "Joker"
let res4 = movies.find((movieObj)=>movieObj.title==='Joker');
console.log(res4);
//     5. findIndex() of "Avengers"
let res5 = movies.findIndex((movieObj)=>movieObj.title==='Avengers');
console.log(res5);