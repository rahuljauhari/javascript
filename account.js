let myAccount = {
    name: 'Rahul Jauhari',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000


let addExpense = function (account,amount){
    account.expenses = account.expenses + amount 
    console.log(account)
}
addExpense(myAccount,2.50)
console.log(myAccount)