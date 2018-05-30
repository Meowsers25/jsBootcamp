let myAccount = {
  name: 'Chris L',
  expenses: 0,
  income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function(account, amount) {
  
  account.expenses = account.expenses + amount
  //console.log(account)
}

addExpense(myAccount, 250.00)
console.log(myAccount)