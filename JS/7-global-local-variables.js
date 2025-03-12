// Global scope variable
var globalVariable = "I'm global!";

function myFunction() {
  // Local scope variable
  var localVariable = "I'm local!";

  console.log(globalVariable);  // Accessing global variable inside the function
  console.log(localVariable);   // Accessing local variable inside the function
}

myFunction();
// Trying to access variables outside the function
console.log(globalVariable);  // This works because it's in the global scope
console.log(localVariable);   // This will cause an error because it's in the local scope of the function
===========================================================================

  // Global scope variable
var globalVariable = "I'm global!";

function myFunction() {
  // Local scope variable
  var localVariable = "I'm local!";
  var globalVariable = "global value is overriden by local definition";
  console.log(globalVariable);  // Accessing global variable inside the function
  console.log(localVariable);   // Accessing local variable inside the function
}

myFunction();
// Trying to access variables outside the function
console.log(globalVariable);  // This works because it's in the global scope
//console.log(localVariable);   // This will cause an error because it's in the local scope of the function
