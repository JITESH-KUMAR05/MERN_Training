// Arrays

let skills = ['html','css','js'];

// accessing the elements (Destructuring)
// accessing is also known as unpacking 
let [a,b,c] = skills;
console.log(b);

// dynamic operations 
// inserting 

// at start
skills.unshift('angular');
console.log(skills);

// at end
skills.push('python')
console.log(skills)

// in between
// splice(index, delete count, new element);
skills.splice(2,0,'c++');
console.log(skills);

skills.splice(2,1,'c++');
console.log(skills);

// Delete

// beginning
skills.shift()
console.log(skills);
// end
skills.pop()
console.log(skills);
//  in between
skills.splice(1,2);
console.log(skills);