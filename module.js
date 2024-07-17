// *THERE ARE TWO WAYS TO IMPORT AND EXPORT
// 1) EXPORT DEFAULT
// 2) SIMPLE EXPORT
// IMPORT BY DEFAULT FUNCTION 
import sum from "./main.js";
console.log(sum(5, 3));
// SIMPLE IMPORT EXAMPLE
import { myFavColour } from "./main.js";
console.log(myFavColour);
import { car } from "./main.js";
console.log(car);
// import { information } from "./main.js";
// console.log(information);
// console.log(information.age);
// keyword as (when we want to change our variable name tHen we use it)
import { information as myInfo } from "./main.js";
console.log(myInfo);
// SIMPLE IMPORT FOR MANY PROGRAMS TOGETHER
import { friendsName, myName, employeeData } from "./main.js";
console.log(friendsName);
console.log(myName);
console.log(employeeData);
// SYNTAX OF EXPORT DEFAULT AND SIMPLE EXPORT
// export default anyName                                         // in export file
// import anyName from "./main.js"                                // in import file
// export                                                         // in export file
// import {variable name,object name etc} from "./main.js"         // in import file
