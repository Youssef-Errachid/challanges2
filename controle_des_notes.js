const prompt = require('prompt-sync')();
let note = parseInt(prompt("enter your note: "));

switch (true) {
    case note >= 90 && note <= 100:
        console.log("A");
        break;
    case note >= 80 && note <= 89:
        console.log("B");
        break;
    case note >= 70 && note <= 79:
        console.log("C");
        break;
    case note >= 60 && note <= 69:
        console.log("D");
        break;
    default:
        console.log("F");
        break;
}