/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

var choiceOne = prompt("Welcome to Random Choice Maker! Maybe you don't know what to eat for lunch. Maybe you don't know what game to play. That's ok! Let Random Choice Maker choose for you! Enter the first item!");
var choiceTwo = prompt("Enter item two!");
var choiceThree = prompt("Enter item there!");

var choiceFinal = randomness(choiceOne, choiceTwo, choiceThree);

function randomness(a, b, c){
	var choices = [a, b, c];
	//console.log(choices);
	var chance = choices[Math.floor(Math.random()*choices.length)];
	//console.log(chance);
	return chance;
}
console.log("Random Choice Maker has made it's choice! It's choice for you is " + choiceFinal + "! Go enjoy the choice!");