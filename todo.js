const todos = ['Order Cat Food','Clean Kitchen','Buy Food','Do Work','Exercise']

//delete the 3rd item
todos.splice(2,1)
console.log(todos)
//Add a New Item onto the End
//Alternate-Method to add a New-Item todos.push('Buy Coffee')
todos.splice(4,0,'This is the Last Item')
console.log(todos)
//Remove the first Item use - todos.shift()
todos.splice(0,1)
console.log(todos)