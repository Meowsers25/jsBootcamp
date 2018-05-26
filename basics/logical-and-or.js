let temp = 55

//logical and operator
//True if bot sides are true; otherwise false
//logical or operator - true if one side is true; false otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
}else if (temp <= 0 || temp >= 120) {
  console.log('It is dangerous to go outside')
} else {
  console.log('Do what you want')
}

//Challenge: 
//are bot vegan? offer vegan dishes
//at least one vegan
//else offer anything on menu

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Here are our vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here is our varied menu')
} else {
  console.log('Let\'s eat meat!')
}