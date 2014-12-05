/*
Patrick Kelly
December 4, 2014
Expressions
*/

//alert("Sup Brah!");

//Bob the froggy simulator! When I read wacky this was one of the first things that came to my mind. Don't as why... because I'm not really sure.

var froggyIntro = prompt("Hey kids welcome to the Bob the Froggy Simulator! \nHere we can simulate the ammount of distance Bob travels depending on the number you enter! Bob travels 5 ft per jump. Enter a number jumps you want Bob to make!");
var travelFt = froggyIntro * 5;
var travelM = froggyIntro * 5 * (3048/10000);
//console.log(travelM); //tested my meters calculation.
alert("With " + froggyIntro + " jumps Bob the Froggy traveled " + travelFt + " feet! Converted to meters he traveled " + travelM + " meters! Whew that was quite the trip! Refresh the page to try again!");
console.log("With " + froggyIntro + " jumps Bob the Froggy traveled " + travelFt + " feet! Converted to meters he traveled " + travelM + " meters! Whew that was quite the trip! Refresh the page to try again!");