let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Police Story',
    author: 'Rahul',
    pageCount: 1000
}

let getSummary = function(books){
    return {
        summary: `${books.title} +  by  + ${books.author} +  with pagecount  + ${books.pageCount}`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary =getSummary(otherBook)

console.log(bookSummary)
console.log(otherBookSummary)