let myBook = {
    title: 'TV',
    Author: 'XYZ',
    pageCount: 100
}
let mySecondBook = {
    title: 'Radio',
    Author: 'ABC',
    pageCount: 900
}

let Books = function(book){
    return {
    summary: (`${book.title} - author- ${book.Author}, pageCount ${book.pageCount}`)
    }
}

let firstbook = Books(myBook)
let Secondbook = Books(mySecondBook)

console.log(firstbook)
console.log(Secondbook)