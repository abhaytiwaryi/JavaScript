const myArray = [0, 1, 2, 3, 4, 5,]
// console.log(myArray[0]);

// const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[0])

// myArray.push(6)
// myArray.push(7)
// myArray.push(8)
// myArray.push(9)
// myArray.pop()
// myArray.unshift(8)
// myArray.shift()
// console.log(myArray.includes(4));
// console.log(myArray.indexOf(0));

console.log("A ", myArray);

// const newArray = myArray.join()
// console.log(typeof newArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("C ", myArray);