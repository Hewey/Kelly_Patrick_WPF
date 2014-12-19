/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

// A quick little randomizer thing. The idea is you are throwing pies and there is a random percent chance of how many throws you will hit.

var welcome = prompt("Welcome to the pie throwing similator. Please enter the first the number of throws you want to make.");//This prompt asks the user how many throws he would like to make.

if(isNaN(welcome)){//This checks to see if entered a number the users and if it does moves on with the code and if not it sends them a message telling them they didnt enter a number.
	console.log("Please enter a number. I can not do math with words.");//This is the message sent to the user if they didnt enter a number.
}else{// This is the else part of the fuction that happens when the user did enter a number. It contains a function doing the math for the number of pies hit. 
	var pieHits = function(h){// I created this anonymous function to house the math for the number of hits made.
	var acc = [30, 100, 50, 75];//This is an array containing the differant number of chances for the ammount of hits one can make.
	var chance = acc[Math.floor(Math.random()*acc.length)];//This is teh varaible choosing and storing one of the numbers in the variable.
	var hitMiss = h *(chance / 100);//This is the variable doing the math for the pies hit. It is using the randomly chosen number from the variable.
	//console.log(hitMiss); This is the log I used to see if it was working.
	return hitMiss; // This is returning a the value from the math done and taking it out of the function so it can be used else where.
}

var total = pieHits(welcome);// This is the variable storing the total of pies hit.
console.log("You hit approximately " + total + " pies of the " + welcome + " you threw.");// This is the console.log printing out the number of pies hit to the user.
}
