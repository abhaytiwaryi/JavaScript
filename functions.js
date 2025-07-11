// console.log("Function Parameters Example");

function greet() {
console.log("A");
 console.log("b");
 console.log("h");
 console.log("a");
 console.log("y");
}

// greet()


// function addTwoNumbers(num1, num2) {

//   console.log(num1 + num2);

// }
// function addTwoNumbers(num1, num2) {

//   // let result = num1 + num2
//   // return result
//   return num1 + num2

// }
// const result = addTwoNumbers(4, 9)

// console.log("Result: ", result);


function addition(num1, num2) {

  return num1 + num2
}
// console.log(addition(5, 10));

function loginUserMessage(username = "Guest") {
  if(!username){
    console.log("Username is required to log in.")
    return
  }
  return `${username} has logged in successfully!`
}

// console.log(loginUserMessage("Abhay"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())

// function loginUserMessage(username) {
//   return username + " has logged in successfully!"
// }
