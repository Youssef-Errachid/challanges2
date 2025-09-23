 const prompt = require('prompt-sync')();

 let age = prompt("please enter your age.");

 if(age >= 18){
    console.log("Eligibldeux e au vote");
 }
 else{
    console.log("Nom eligible.");
 }