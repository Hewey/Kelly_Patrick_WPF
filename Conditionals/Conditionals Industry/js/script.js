/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh!");

//Hewey Design has grown! Now featuring an admin account to look at employee count and how many males and females are employed! 

var userName = prompt("Please enter a username for your admin account.");// This is the variable for the user created username.
var passWord = prompt("Please enter a password for your admin account.");// This is the variable for the user created password.
var logUser = prompt("Please enter your username.");//This is the variable for the user logging in with the username.
var logPass = prompt("Please enter your password.");// This is the variable for the user logging in with the password.

if(userName === ""){// This is the condition to make sure that the user actually entered something for the username.
	console.log("Please enter a username. Do not leave it blank.");
}

if(passWord === ""){// This is the condition to make sure that the user actually entered something for the password.
	console.log("You need a password. Please enter one!");
}

if(logUser === userName && logPass === passWord){//This is the condition to log the user in and to make sure that the user entered the correct information.
	var welcome = prompt("Hello " + userName + "! Welcome to Hewey Design! What would you like to know? If you want to know the number of employees type \"Employee\". If you want to know how many male employees we have type \"Male\". If you want to know how many female employees we have type \"Female\".")
}else{
	if(logUser != userName){
		console.log("Wrong username. Please try again.");
	}
	if(logPass != passWord){
		console.log("Wrong password. Please try again.");
	}
}
//This is the variable containing the array with the ammount of employees and their gender.
var employeeNum = ["male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male","male", "female", "male", "male", "female", "male", "male", "female", "female", "male"]
//console.log(employeeNum.length);

if(welcome === "Employee"){// This is the condition for when the user types in "Employee" and will show how many employee's there are.
	console.log("Hewey designs has " + (employeeNum.length) + " employees.");
}

if(welcome === "Male"){// This is the condition containing the loop that when the user types "Male" it searches through the array and counts the ammount of males employed and then prints out the number.
	var maleNum = 0;
	for(var i = 0; i<employeeNum.length; i++){
		if(employeeNum[i] === "male"){
			maleNum++;
		}
	}
	console.log("There are " + maleNum + " male employees at Hewey Design.")
}

if(welcome === "Female"){// The is the condition containing the loop that will count the ammount of female employees contained in the array when the user types "Female". Then it will print out the ammount in the console.
	var femaleNum = 0;
	for(var z = 0; z<employeeNum.length; z++){
		if(employeeNum[z] === "female"){
			femaleNum++;
		}
	}
	console.log("There are " + femaleNum + " female employees at Hewey Design.")
}