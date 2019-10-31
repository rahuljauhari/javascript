
//spilce - Start Number, delete item in the array , add string

const notes = ['Note 1', 'Note 2','Note 3']

notes.splice(0,0,'Notes 0') //adding "Notes 0" to the 0th position in the array

console.log(notes)

notes.forEach(function(item,index){
    console.log(index,item)
    
}
)

