export function printAge(age){
    console.log(age)
}

//export class CustomerDetails { // way 1

class CustomerDetails { //way 2

    printFirstName(FirstName){
        console.log(FirstName)
    }

    //click /** press enter to get this shortcut for to make comments on the code
    /** 
     * This method will print the last name
     * @param {string} lastName 
     */
    
    printLastName(lastName){
        console.log(lastName)
    }
}

export var customerDetails = new CustomerDetails() // way 2 