//1.Hello World
console.log("Hello World!")

// Variables
var firstName = "John"
let lastName = "Smith"
console.log(firstName) //John

var age,dateOfBirth,sex
age="18"
sex="Male"
console.log(age) //18
age="28" //we can reassign
console.log(age) //28

//Constants
const occupation = "Engineer"
//occupation = "Driver" //Will not allow to assign again, throws TypeError: Assignment to constant variable.
console.log(occupation)

//DataTypes
var middleName = "David" //string in JS like '' or ""
var ageOfBrother = 25 //number
var isHeMarried = false //boolean
var yearsInMarriage = null //null
var numberOfCars = undefined //undefined