//objects

var customer = {        //customer object holds multiple key and values
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}

//Dot notation
customer.firstName="Mike"
//Bracket notation
customer['lastName']='silver'

console.log(customer) //{ firstName: 'John', lastName: 'Smith' }
console.log(customer.firstName) //John
console.log(customer['lastName']) //Smith
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var cars = ["Volvo", "Toyota", "Tesla"]
cars[1]="BMW"
console.log(cars[0])
console.log(customer.cars[0])