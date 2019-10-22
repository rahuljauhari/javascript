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
    console.log(`${books.title} by ${books.author}`)
}

getSummary(myBook)
getSummary(otherBook)