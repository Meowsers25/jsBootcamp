//multiple arguments

let add = function (a, b, c) {
  return a + b + c
}

let result = add (10, 1, 5)
console.log(result)

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' -Score: ' + score
}

let scoreText = getScoreText('Beatrice')
//let scoreText = getScoreText(undefined, 99) - need undefined to //get score to print
console.log(scoreText)

//Challenge:
//total, tipPercent

let getTip = function(total, tipPercent = .15) {
  return 'The tip is: ' + total * tipPercent
}

let tip = getTip(55.00, .20)
console.log(tip)