//undefined represents the absence of a value 
let name

name = 'Katie'

if (name === undefined) {
  console.log('Please provide a name')
} else {
  console.log(name)
}

//console.log(name)


//undefined for function arguments: function argument not provided
//undefined as function return default value
let square = function (num) {
  console.log(num)
}
//square()
let result = square()
console.log(result)

//Null as assigned value; programmer explicitly clears value
let age = 46

//age = undefined
age = null

console.log(age)

