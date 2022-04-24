// OOP with functions
// function Book(title, pages, isbn) {
//     this.title = title
//     this.pages = pages
//     this.isbn = isbn
// }

// OOP with classes

class Book {
    constructor(title, pages, isbn) {
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

// var book = new Book('title', 5, "344567rfvgt")

// console.log(book.printIsbn());

// Inheritance

class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn)
        this.technology = technology
    }
    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript')

// console.log(jsBook.title);
// console.log(jsBook.printTechnology());

// getters and setters in JS
class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(text) {
        this._name = text
    }
}

let adedeji = new Person('Adedeji')
// adedeji.name = 'Mayowa'
// console.log(adedeji.name);

adedeji._name = 'Aramide'
console.log(adedeji.name);
