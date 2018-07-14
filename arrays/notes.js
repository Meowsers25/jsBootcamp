const notes = [ 
  {},
  {
    title: 'My Next Trip',
    body: 'France'
  },
  {
    title: 'Shopping List',
    body: 'Cat food'
  },
  {
    title: 'Meeting Today',
    body: '10 AM'
  }]

// notes.push('My new note') // adds new item to end of array

// notes.pop() // removes last item you can also store value in a var

// notes.shift() //removes first item

// notes.unshift('Newest note') // adds item to beginning

//notes.splice(1, 0, 'This is the new second item') // if you use 0 for //the second argument, you can add i an item at that location

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (note, index) {
//   console.log(index)
//   console.log(note)
// })

console.log(notes.length)
console.log(notes)

//counting......
//initializer, condition, final expression
// for (let count = 0; count <= 2; count++) {
//   console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count])
// }

//if using index of and the item doesnt exist, it //will return -1

//cant use indexOf with an array of objects

console.log(notes.indexOf({}))
