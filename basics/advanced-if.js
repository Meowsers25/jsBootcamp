let isAccountLocked = false
let userRole = 'user'

// if (isAccountLocked) {
//   console.log('Account is locked')
// } else {
//   console.log('Welcome')
// }

if (isAccountLocked) {
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome Admin')
} else {
  console.log('Welcome')
}

//Challenge: its freezing, its hot, go for it, its nice

let temp = 125

if (temp <= 32) {
  console.log("It's freezing outside")
} else if (temp >= 110) {
  console.log("It's too hot outside")
} else {
  console.log('Go for it, it\'s nice out!')
}