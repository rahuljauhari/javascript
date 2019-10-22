let myAccount = {
    name: 'Rahul jauhari',
    expenses: 0,
    income: 0,
    balance: 0
}

let addIncome = function (account,income){
    account.income = account.income + income
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    }

let getAccountSummary = function(account){
    account.balance = account.income - account.expenses
    return `Account for ${account.name} has income of $${account.income} and expense of $${account.expenses} and account balance of $${account.balance}`
}

addIncome(myAccount,2000)
addExpense(myAccount,100)
addExpense(myAccount,100)

console.log(getAccountSummary(myAccount))