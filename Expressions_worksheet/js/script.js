/* 
Patrick Kelly
December 4,2014
Expressions Worksheet
*/

//alert("Sup Brah");

//Calculate how old Sparky the pit bull is in dog years based on his actual age.

var sparkyAge = 1; //This a variable created using the given information of Sparky's age.
var humanAge= sparkyAge * 7; //This is a result variable using the sparkyAge variable multiplied by 7 to calculate Sparky's age in human years.
console.log("Sparky is " + humanAge + " human years old which is " + sparkyAge + " in dog years.") //This will print the results in the console. The console should print, "Sparky is 7 human years old which is 1 in dog years."

//Create an expression that calculates how much pizza each partygoer will get at the party.

var pizzaSlices = 8; //This is the variable representing the ammount of slices of pizza.
var partyPeople = 12; //This the variable for the ammount of people at the party. 
var pizzaNu = 2; //This is the variable for the ammount of pizzas at the party.
var slicesPp = pizzaSlices * pizzaNu/partyPeople; //This is the results variable to calculate how many slices of pizza a partygoer gets.
console.log("Each person ate " + slicesPp + " slices of pizza at the party."); //This is the results being printed out in the console and integrated into the required sentance.

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

var pizzaSlices = 8;
var partyPeople = 12;
var pizzaNu = 2;
var sparkySlices = pizzaSlices * pizzaNu % partyPeople;
console.log(sparkySlices)