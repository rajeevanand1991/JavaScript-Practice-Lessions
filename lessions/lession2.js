// Concatenation and Interpolation
var price = 80
var itemName = "Table"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //concatenation
console.log(messageToPrint)
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint2)