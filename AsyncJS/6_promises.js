// make API req
// let res = fetch("https://jsonplaceholder.typicode.com/posts")
// res.then(
//     (message)=> message.json()).then((data)=>console.log(data))
// .catch(
//     (error) => console.log(error)
// )


// modern way to consume the promise

async function getData(){
    // make api request and get response
    // console.log("Hello")
    let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    // extract data from res

    let data = await resp.json();
    // console.log("Hello")
    console.log(data);
    // console.log("Hello");
    
}

getData();
console.log("Hello")