let name = '  Luna Lamothe  '

//length property
name.length //length is a property, so no parens
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase()) //this is a method, so parens

console.log(name.toLowerCase())

//includes method
let password = 'abc123password098'
console.log(password.includes('passwood'))

//trim
console.log(name.trim())

//challenge
//length more than 8 and doesn't contain 'password'

let isValidPassword = function (password) {
  if (password.length >= 8 && !password.includes('password')) {
    return true
  } else {
    return false
  }
}

console.log(isValidPassword('avshg'))
console.log(isValidPassword('hwh276e82g2hwj2gs'))
console.log(isValidPassword('1234password786'))