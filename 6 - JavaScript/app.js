console.log("Hello world!");
// This is a single-line comment.
/* 
This is a
multi-line
comment.
*/

// Variables: Container
/*
let - mutable/changeable -block-scope
var - mutanle/changeable - global scope
const -
*/

//Camel-case naming Convension
let firstName = "Paul";  
console.log("Firstname: ", firstName);
firstName = "Jane";
console.log("Firstname: ", firsName);

var lastName = "Doe";
console.log("Firstname: ", firsName);
lastName = "Mamugay";
console.log("Firstname: ", lastName);

// {} - Code Block
{
    var email = "paulpaolomamugay6@gmail.com";
    let userName = "Paulpaolo2929";
    console.log("Username:", userName);
}
// {} - Code Block
{
    var email = "janesmith@example.com";
    let username = "janesmith40";
    console.log("Username:", username);
  }

  

  /*
  Note: You can only access a block scope variable 
  inside of the block where you defined it.
  console.log("Username:", username); 
  ReferenceError: username is not defined.
  */
  console.log("Email:", email);
console.log("Email:", email);