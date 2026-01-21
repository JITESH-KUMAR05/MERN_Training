// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books


// My Solution starts here
//  class defination 

class Book{
    title;
    author;
    pages;
    isAvailable

    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true;
    }
    borrow(){
        if(this.isAvailable === true){
            console.log("You have borrowed the book successfull!");
            console.log("Return it back soon");
            this.isAvailable = false;
        }
    }
    returnBook(){
        this.isAvailable = true;
        console.log("Thank you for returning the book")
    }
    getInfo(){
        console.log("title",this.title);
        console.log("Author: ",this.author);
        console.log("Pages: ", this.pages);
        console.log("Available: " ,this.isAvailable)
    }
    isLongBook(title){
        if(this.pages>300) return true;
        return false;
    }
}

let b1 = new Book("Harry","Harry",260);
let b2 = new Book("the rise","JK",400);
let b3 = new Book("got it","Vineel",360);
let b4 = new Book("Damm","Gopi",150);
let b5 = new Book("Chalo","teja",180);

b1.getInfo();
b2.getInfo();
b3.getInfo();
b4.getInfo();
b5.getInfo();

b1.borrow();
console.log(b1.isAvailable);
;
b4.borrow();
console.log();

b1.returnBook();
let totalLongBooks = 0;
if(b1.isLongBook()) totalLongBooks++;
if(b2.isLongBook()) totalLongBooks++;
if(b3.isLongBook()) totalLongBooks++;
if(b4.isLongBook()) totalLongBooks++;
if(b5.isLongBook()) totalLongBooks++;
console.log(totalLongBooks);
if(b1.isAvailable) b1.getInfo();
if(b2.isAvailable) b2.getInfo();
if(b3.isAvailable) b3.getInfo();
if(b4.isAvailable) b4.getInfo();
if(b5.isAvailable) b5.getInfo();