//convert fahrenheit to celsius 

let convertFahrenheittoCelsius = function (fahrenheit) {
   let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let tempOne = convertFahrenheittoCelsius(32)
let tempTwo = convertFahrenheittoCelsius(68)

console.log(tempOne)
console.log(tempTwo)