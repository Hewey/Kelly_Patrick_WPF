/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh!");

var userName = prompt("Please enter a username for your admin account.");
var passWord = prompt("Please enter a password for your admin account.");

if(userName === ""){
	console.log("Please enter a username. Do not leave it blank.");
}

if(passWord === ""){
	console.log("You need a password. Please enter one!");
}
