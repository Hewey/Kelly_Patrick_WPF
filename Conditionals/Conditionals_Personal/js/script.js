/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh");

var userName = prompt("Please enter your username.");

if(userName === ""){
	console.log("Please enter your username don't leave it blank.");
}
var totalShots = prompt("Hello " + userName + " and welcome to the \"How bad is your aim!\" calculator. To start please enter the total number of shots you have made.")

if(isNaN(totalShots)){
	console.log("Please enter a number! I can't do math with words!");
}
var totalPer = prompt("Please enter your total percentage of accuracy.");

if(isNaN(totalPer)){
	console.log("Please enter a number! I can't do math with words!");
}

var totalHit = totalShots * (totalPer / 100);
console.log("You have hit a total of " + );