let person={
    pid : 100, // similary we can have any number of key value pair 

}

let student = {}

// Now the requirement is to create 100 person objects 

// so we can create person data type or class

class Person{
    // properties and methods what ever is required 
    pid;
    // if we want to make something as private then we need to add before 
    #salary;
    age;
    static company = "Google";
    // methods
    constructor(pid,age,salary){
        this.age = age;
        this.pid = pid;
        this.#salary = salary;
    }
    getPersonData(){
        // logic
        console.log(this.pid,this.age,this.#salary);
    }
}

//  now we can create objects of person type 

let p1 = new Person(100,21,50000);
let p2 = new Person(200,22,20000);
p1.getPersonData();
p2.getPersonData();

// p1.#salary = 60000; // this will not be 
console.log(Person.company);