// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.getTimezoneOffset());

// let now = new Date;
// console.log(now.toLocaleString());

// let now = new Date();
// console.log(now.toLocaleTimeString());

let now = new Date();
let timeInIndia = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
console.log("IST Time:", timeInIndia);
setInterval(timeInIndia, 1000);
