
let num = 103.941 

//num.toFixed 
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


//generate random numbers
//let random = Math.random()
//console.log(random)

//Generate Random Number
let min = 10
let max = 20
let randomnum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomnum)