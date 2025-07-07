//singleton
// Object.create
//object literals

const JSuser = {
    name: "abhay",
    "Full Name": "Abhay Kumar",
    age: 18,
    location: "India",
    email: "example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JSuser.age);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Name"]);
// JSuser.email = "abhaytiwary@gmail.com"
// console.log(JSuser.email);
// Object.freeze(JSuser); // prevents any changes to the object
// JSuser.age = 20; // this will not change the age
// console.log(JSuser.age); // still 18

//  const mySym = Symbol("key1")
// console.log(mySym);

// const mySym = Symbol("key1");

// JSuser[mySym] = "value1",
// console.log(mySym);

// JSuser.greeting = function() {
    // console.log("Hello JS User");
// }

// console.log(JSuser.greeting()); // outputs: Hello JS User

console.log(` Hey There ${JSuser.age}`);
