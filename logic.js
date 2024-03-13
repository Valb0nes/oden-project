
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}


function addBookToLibrary(title, author, pages, read) {
let book = new Book(title, author, pages, read);
myLibrary.push(book)
}

addBookToLibrary("A Court of Thorns and Roses", "Sarah J. Maas", 432, true) 

addBookToLibrary("A Court of Mist and Fury", "Sarah J. Maas", 650, true) 
console.log(myLibrary)