//Global scope (conversion, temp1, temp2)
  //Local scope (temp, celsius)
    //Local scope (isFreezing)

let conversion = function (temp) {
  let celsius = (temp - 32) * 5 / 9

  if(celsius <= 0) {
    let isFreezing = true
  }
  return celsius
}
let temp1 = conversion (68)
let temp2 = conversion (32)
console.log(temp1)
console.log(temp2)