 const prompt = require('prompt-sync')();

let num = prompt("please enter a number?");

if(num === 0 ){
    console.log("the number you enter is 0");
}
else if (num > 0){
    console.log("the number is p0sitive.");
}
else {
    console.log("the number is nigative.")
}
