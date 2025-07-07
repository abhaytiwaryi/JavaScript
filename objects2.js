// const tinderUser = new Object() //Singleton Object

// const tinderUser = {} //non singleton Object

// tinderUser.id = "123abc"
// tinderUser.name = "Abhay Tiwary"
// tinderUser.age = 22
// console.log(tinderUser);

// const regularUSer = {
    // name: "Abhay Tiwary",
    // fullname: {
        // userfullname : {
            // firstname: "Abhay",
            // lastname: "Tiwary"
        // }
    // }
// }
// console.log(regularUSer.fullname.userfullname.firstname); // Abhay

const obj1 = {1: "a", 2: "b"};
const obj2 = {4: "d", 5: "e"};

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2) // Merging obj2 into obj1
console.log(obj3);
