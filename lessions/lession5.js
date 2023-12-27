//logical "AND"
console.log(true && true) //all values have to be TRUE for expression to be TRUE

//logical "OR"
console.log(true || false) //any values should be TRUE for the expression to be TRUE 

var ageIsMoreThanEighteen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' +eligibilityForDriversLicense) //true

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' +eligibilityForDriversLicense) //true

//logical "NOT"
console.log(!true) //false
console.log(6 !== 10) //true