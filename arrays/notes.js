const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.push('My new note') // adds new item to end of array

// notes.pop() // removes last item you can also store value in a var

// notes.shift() //removes first item

// notes.unshift('Newest note') // adds item to beginning

//notes.splice(1, 0, 'This is the new second item') // if you use 0 for //the second argument, you can add i an item at that location

notes[2] = 'This is now the new note 3'

console.log(notes.length)
console.log(notes)