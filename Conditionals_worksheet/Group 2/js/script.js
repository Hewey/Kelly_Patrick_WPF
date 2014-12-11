/*
Patrick Kelly
Conditionals Worksheet
Sec 03WDD
Dec 11, 2014
*/

//alert("Sup Brah");

var userName = prompt("Choose a username.");
var userPass = prompt("Please enter a password.");
var userName2 = prompt("Please enter your users name.");
var userPass2 = prompt("Please enter your password.");

if(userName2 === userName && userPass2 === userPass){
	console.log("Welcome, " + userName);
}else{
	if(userName2 != userName){
		console.log("User not found. Try again.");
	}
	if(userPass2 != userPass){
		console.log("Password does not match our records.")
	}
}