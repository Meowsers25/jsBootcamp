//craete an array with 5 different todos
//you have x todos; x is length of array
//print the first and second to last

//delete the third item
//add new item onto the end
//remove the first item from the list

const todos = ['Walk the pups', 'Feed the cat', 'Feed the pups', 'Go fishing', 'Get some coding done']

todos.splice(2, 1)
todos.push('Get flat tire fixed')
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)
// console.log(`Your first todo: ${todos[0]}`)
// console.log(`Your next to last todo: ${todos[todos.length - 2]}`)