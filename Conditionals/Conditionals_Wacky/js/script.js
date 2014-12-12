/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh!");

//So this was the first idea I cam up with for a thing to create this week. It's sort of similar to what I did last week for Bob the frogy execpt a lot more complex and instead of just travel there are three actions that the hero completes based on which power the user chose.

var heroName = prompt("Hello and welcome to the \"Hero Sim\"! Please enter a name for your hero!"); //Here I created a variable that prompted the user to enter a name of their hero.
//console.log(heroName); //This was the console.log I used to make sure the varaible worked and properly stored the information.

if(heroName === ""){ //This is the condition I created to make sure that the user inputed a name for their hero.
	console.log("Oh no! Your hero doesn't have a name! Please enter a name for your hero!");
}else{
	var heroPower = prompt("Your hero name is " + heroName + ". Now that we have a name for your hero. Let's chose their power! Type one of the following in the box below: Speed, Strength, or Jump.");
}

if(heroPower != "Speed"){ //This is the crazy condition that I created to make sure that the user chose a correct power for their hero. It took me quite a while to get it correct and I think I finally did.
	if(heroPower != "Strength"){
		if(heroPower != "Jump"){
			console.log("Oh no! That is not one of the powers! Please try again!");
			var heroPower = prompt("Your hero name is " + heroName + ". Now that we have a name for your hero. Let's chose their power! Type one of the following in the box below: Speed, Strength, or Jump.");
		}else{
			var minutes = prompt("You have chosen the " + heroPower + " power for your hero! How long in minutes would you like your hero to use their power?");		
		}
	}else{
		var minutes = prompt("You have chosen the " + heroPower + " power for your hero! How long in minutes would you like your hero to use their power?");	
	}	
}else{
	var minutes = prompt("You have chosen the " + heroPower + " power for your hero! How long in minutes would you like your hero to use their power?");
}

var powerOne = "Speed"; //This is the variable to identify the correct expression to use for the speed power.
var powerTwo = "Strength"; //This is the variable to identify the correct expression to use for the strength power.
var powerThree = "Jump"; //This is the variable to identify the correct expression to use for the jump power.
var powerRate = [400, 12, 4]; //This is the array containing the different rates at which the hero will do each power.

if(heroPower === powerOne){ //This is the condition containing the expression to complete for the speed power.
	var outcomeOne = powerRate[0] * minutes;
	console.log("Your hero " + heroName + " using speed ran " + outcomeOne + " miles in " + minutes + " at a rate of " + powerRate[0] + " miles a minute. Thank's for playing! To play again please refresh this page.");
}	

if(heroPower === powerTwo){ //This is the condition containing the expression to complete for the strength power.
	var outcomeTwo = powerRate[1] * minutes;
	console.log("Your hero " + heroName + " using the strength power, punched through " + outcomeTwo + " walls at a rate of " + powerRate[1] + " walls per minute. To play again please refresh this page.")
}

if(heroPower === powerThree){ //This is the condition containing the expression to complete for the jump power.
	var outcomeThree = powerRate[2] * minutes;
	console.log("Your here " + heroName + " using the jump power, jumped over " + outcomeThree + " buildings at a rate of " + powerRate[2] + " buildings per minute. To play again please refresh this page.")
}