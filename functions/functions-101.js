//Function - input (argument), code, output (return value)

//define function
let greetUser = function () {
  console.log('Welcome User')
}
//call function
greetUser()

let square = function (num) { //num is the parameter
  let result = num * num
  return result
}
let value = square(3) //3 is the argument
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//challenge:
//convert fahrenheit to celsius

let conversion = function (temp) {
  let celsius = (temp - 32) * 5 / 9
  return celsius
}
let temp1 = conversion (68)
let temp2 = conversion (32)
console.log(temp1)
console.log(temp2)