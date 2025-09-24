const prompt = require('prompt-sync')();

let annee = prompt("please ente the year.");

if((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0 ));{
  console.log(annee , "est une annee bissextile");
}
else{
  console.log(annee , " n'est pas une annee bissextile");
}
  
