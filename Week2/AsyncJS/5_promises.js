// Ravi made a promiise to kiran that he will call him after 10 min
console.log("Ravi made a promiise to kiran that he will call him after 5 sec");
console.log("Kiran is waiting");


// create promise (Ravi)
let futureAvailability=true;
let promiseObj = new Promise((fullfill,reject)=>{
    setTimeout(()=>{
        if(futureAvailability===true){
            fullfill("Hello frnd how are you");
        }else{
            reject("Sorry i will call later");
        }
    },3000)
},)
// console.log(promiseObj)
// consume promise (kiran)

// 2 Approach

// 1 old syntax
// promiseObj
// .then((message)=>console.log("In Then: ",message)) // when promise is fullfilled
// .catch((error)=>console.log("Catch: ",error)); // when promise is rejected

// console.log("Hello")
// 2 modern syntax using (async and await)
// the below one is the modern syntax but not suitable for this example but the syntax is same as below
// async function consumePromise(){
//     let res = await promiseObj();
//     console.log(res);
    
// }

// console.log("Hello")
let focus = 'Gone'
console.log("Creating My OWn promise now");
let myPromise = new Promise((fullfill,reject)=>{
    setInterval(()=>{
        if(focus=='Gone'){
            console.log("Learn Mern with Focus", new Date(Date.now()).toDateString());
        }else{
            console.log("Keep Going",Date.now().toStringify());
        }

    },2000)
})

myPromise.then(
    (message)=>{
        console.log(message);
    }
).catch(
    (error)=>{
        console.log(error)
    }
)