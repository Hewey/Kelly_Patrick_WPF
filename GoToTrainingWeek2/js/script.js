/* 
Patrick Kelly
SDI Sec 03WWD
Go To Training Week #2
12/3/2014
*/

//alert("Sup Brah.");

//Create an age calculator

//ask the user their name

var name = prompt("Please type in your name.");

alert("Welcome "+name+"! Let's figure out how old you are.");

var yearBorn = prompt("What year where you born?");
console.log(yearBorn);
var currentYear = 2014;
var age = currentYear - yearBorn;

alert(name+" you are "+age+" years old.");

var yearsMore = prompt("How many years in the future would you like to know?");
console.log(yearsMore);

var futureAge = age + Number(yearsMore);
console.log(futureAge);

console.log("You will be "+futureAge+" in "+yearsMore+" years.");
alert("You will be "+futureAge+" in "+yearsMore+" years.");