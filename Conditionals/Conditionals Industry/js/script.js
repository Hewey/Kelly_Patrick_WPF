/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh!");

var userName = prompt("Please enter a username for your admin account.");
var passWord = prompt("Please enter a password for your admin account.");
var logUser = prompt("Please enter your username.");
var logPass = prompt("Please enter your password.");

if(userName === ""){
	console.log("Please enter a username. Do not leave it blank.");
}

if(passWord === ""){
	console.log("You need a password. Please enter one!");
}

if(logUser === userName && logPass === passWord){
	var welcome = prompt("Hello " + userName + "! Welcome to Hewey Design! What would you like to know? If you want to know the number of employees type \"Employee\". If you want to know how many male employees we have type \"Male\". If you want to know how many female employees we have type \"Female\".")
}else{
	if(logUser != userName){
		console.log("Wrong username. Please try again.");
	}
	if(logPass != passWord){
		console.log("Wrong password. Please try again.");
	}
}
var employeesNum = ["male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male"]
console.log(employeesNum.length);