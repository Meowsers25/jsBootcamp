//students score, students possible score
//15/20 -> you got a C (75%)

let grade = function (score, possibleScore) {
  let total = (score / possibleScore) * 100
  let letterGrade = ''

  if (total >= 90) {
      letterGrade = 'A'
  } else if (total >= 80) {
      letterGrade = 'B'
  } else if (total >= 70) {
      letterGrade = 'C'
  } else if (total >= 60) {
      letterGrade = 'D'
  } else {
      letterGrade = 'F'
  }
  return `You got a ${letterGrade} (${total}%)!`
}
let outcome = grade(80, 100)
console.log(outcome)