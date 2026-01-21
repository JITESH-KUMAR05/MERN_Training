let a = 100;

// default export 
export default a; // the importing module will have freedom for naming it whatever they want 


// named exports
export let b = 200 // now we have to import it with the same name indide {} othewise it will not be imported 
export let marks = [98,99];
export let address = {
    city : "hyd",
    pincode : 9999
}



// we can also export them once as a object 
// export {b,marks,address};