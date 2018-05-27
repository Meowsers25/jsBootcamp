//multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add (10, 1, 5)
console.log(result)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  //return 'Name: ' + name + ' -Score: ' + score
  return `Name: ${name} -Score: ${score}`
}

let scoreText = getScoreText('Beatrice')
//let scoreText = getScoreText(undefined, 99) - need undefined to //get score to print
console.log(scoreText)

//Challenge:
//total, tipPercent

//string template challenge
//A 15% tip on $55 would be 
let getTip = function(total, tipPercent = .15) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  //return 'The tip is: ' + total * tipPercent
  //you can do math in the {}
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let answer = getTip(150, .25)
console.log(answer)

let name = 'Chris'
let age = 46
console.log(`Hey my name is ${name}, I am ${age} years old!`)