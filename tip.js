let tipCalculate = function(bill){
    let tip = bill * (20/100)
    return tip
}
let tipAmount = tipCalculate(1200)
console.log('Amount paid in TIP:    '+ '$' + tipAmount)