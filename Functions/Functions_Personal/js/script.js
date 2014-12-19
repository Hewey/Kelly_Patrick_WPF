/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

// I decided to make this randome choice thing. Sometimes I have hard time deciding what to eat or what game to play so I decided to make something to choose for me.

/* This first prompt explains what the program does and collects the first item from the user and stores it. */var choiceOne = prompt("Welcome to Random Choice Maker! Maybe you don't know what to eat for lunch. Maybe you don't know what game to play. That's ok! Let Random Choice Maker choose for you! Enter the first item!");
var choiceTwo = prompt("Enter item two!");// This prompt collects the second item from the user and stores it.
var choiceThree = prompt("Enter item there!"); // This prompt collects and stores the third item from the user and stores it.

var choiceFinal = randomness(choiceOne, choiceTwo, choiceThree);// This variable calls the function and stores the results of that function. It also tells the array what a, b, and c are to be used as in the function.

function randomness(a, b, c){// This function contains the code for the random choice.
	var choices = [a, b, c];// This takes variable the items stored in the prompts and puts them into an array.
	//console.log(choices); this was used to make sure the items were properly stored in the array.
	var chance = choices[Math.floor(Math.random()*choices.length)];// This is the variable that chooses one of the random items from the array and stores that choice.
	//console.log(chance); this was used to make sure that the code there worked.
	return chance; //This takes the stored choice and lets it be taken out of the function which is then stored in the variable choiceFinal.
}
console.log("Random Choice Maker has made it's choice! It's choice for you is " + choiceFinal + "! Go enjoy the choice!"); //This is the console.log that prints out the final choice to the user.