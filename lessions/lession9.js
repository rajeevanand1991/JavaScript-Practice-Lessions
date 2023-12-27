//import { CustomerDetails } from "../helpers/printHelper.js"; //way 1 it will work

import { customerDetails } from "../helpers/printHelper.js"; // for Way 2, which added export in base class

//var customerDetails = new CustomerDetails() // way 1 it needs to add this line in child class //created instance/object of a class
customerDetails.printFirstName('Steve')
customerDetails.printLastName('Smith')