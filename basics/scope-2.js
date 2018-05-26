//Global (name)
  //Local (name)
    //Local
  //Local  

//let name = 'Chris'

if (true) {
  //this is called variable shadowing in JS - its when a variable
  //in a local scope uses its value instead of a variable in a 
  //parent scope
  //let name = 'Katie'

  if (true) {
    let name = 'Luna'
    console.log(name)
  }
}

if (true) {
  console.log(name)
}

//Leaked Global - when we assign a value to a variable, but that //variable was never explicitly defined
//always define your variables