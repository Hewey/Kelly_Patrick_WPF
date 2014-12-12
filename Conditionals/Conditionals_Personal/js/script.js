/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh");

//Since I play a lot of Counter Stike: Global Offensive I thought it would be interesting to make a simple caculator that would take the total number of shots I've made and figured out how many shots using my accuracy percentage I have hit.

var userName = prompt("Please enter your username."); //This variable asks the user to enter an username.

if(userName === ""){// This condition checks to see if the user actually entered something.
	console.log("Please enter your username don't leave it blank.");
}
//This variable introduces the user to the calculator and asks for the total number of shot's they have made.
var totalShots = prompt("Hello " + userName + " and welcome to the \"How bad is your aim!\" calculator. To start please enter the total number of shots you have made.")

//This condition makes sure that they entered a number rather than a text sting. Without a number the math wouldn't work.
if(isNaN(totalShots)){
	console.log("Please enter a number! I can't do math with words!");
}
var totalPer = prompt("Please enter your total percentage of accuracy.");//This is teh variable asking for and containing the perctage of accuracy the user has.

//This is a condition like the one above looking to see if they entered a number or not.
if(isNaN(totalPer)){
	console.log("Please enter a number! I can't do math with words!");
}

var totalHit = totalShots * (totalPer / 100);//This is the variable containing the expression to caculate the total number of hit shots and the storing that number.
console.log("You have hit a total of " + totalHit + " shots. Get better scrub!"); //This is the console.log printing out the total number of shots the user has hit.