 const prompt = require('prompt-sync')();
let num1 = prompt("enter the first number.");
let num2 = prompt("please ente the second number.")

if (num1 > num2){
    console.log("the first number is max.");
}
else {
    console.log("the second number is max.");
}