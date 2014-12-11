/*
Patrick Kelly
Conditionals Worksheet
Sec 03WDD
Dec 11, 2014
*/

//alert("Sup Brah");

var temp = prompt("Please enter the a tempature.");
var tempType = prompt("Please enter F for Fahrenheit or C for Celsius for your tempature.");
console.log(temp);
console.log(tempType);
if(tempType === "F"){
	var tempCels = (temp - 32) * 5/9;
	console.log("The tempature is " + tempCels + " degrees Celsius.")
}else{
	var tempFarhen = temp * 9/5 + 32;
	console.log("The tempature is " + tempFarhen + " degrees Fahrenheit.")
}