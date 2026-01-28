// 3 people order food
// person1 order biryani (5 sec)
console.log('person 1 ordered biryani') // non blocking sync
setTimeout(() => { // blocking async
    console.log('biryani delived to person 1')
},5000)
// person2 order curd rice (2 sec)
console.log('person 2 order curd rice');
setTimeout( () => {
    console.log('curd rice delived to person 2')
},2000)
// person3 orders water bottle
console.log('person 3 order water bottle')
setTimeout(() => {
    console.log('water bottle delivered to person 3')
},1000)

