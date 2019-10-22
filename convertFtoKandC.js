
let convertFtoKandC = function(f){
    return{
        fahrenheit: f,
        kelvin: (f + 459.67) * (5 / 9),
        celsius: (f -32) * (5 / 9)
    }
}

let temperature = convertFtoKandC(74)
console.log(temperature)