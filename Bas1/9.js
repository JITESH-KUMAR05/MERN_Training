// Callback functions --> a function sent as an argument to another function

function test1(a){
    console.log(a);
    console.log(a());
}

test1(function(){
    return 123;
}); //a



function hello1(){

}


function hello2(){
    
}