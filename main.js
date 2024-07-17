// STEP 03 MODULES , INQUIRER ,CHALK
// MODULES(WITH THE HELP OF IT WE CAN IMPORT AND EXPORT OUR CODE)
// EXPORT DEFAULT //
function sum(num1, num2) {
    return num1 + num2;
} // function bnaty tw output leny k liye uska name call krty wo import file m krengay
export default sum;
// SIMPLE EXPORT 
export let myFavColour = ["pink", "red", "black"];
export let car = "civic";
export let information = {
    name: "sadia",
    age: 23,
    gender: "female",
};
// SIMPLE EXPORT FOR MANY PROGRAMS
export { friendsName, myName, employeeData };
let friendsName = ["ayesha", "mano", "fiza", "javeria"];
let myName = "sadia";
let employeeData = {
    name: "amir",
    employeeId: 1234,
    designation: "accountant",
};
