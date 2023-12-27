//Declarative Function

helloOne() //called 1st time before function declare will work

function helloOne(){
    console.log('Hello One!')
}


helloOne() //called 2nd time after function declare also will work

//Anonymous function
//helloTwo() //Will face before declaration, TypeError: helloTwo is not a function at Object.<anonymous>

var helloTwo = function(){
    console.log('Hello two!')
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}

helloThree()

//Function with Arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName('John',' Peter')

//function with return
function multiplyByTwo(number){
    var result = number *2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)