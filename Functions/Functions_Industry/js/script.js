/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

//Hewey design is looking for a new office. They have chosen 3 and need to see if they fit what they are looking for.

var officeOne = [400, 300, "suburbs", 15000] // This is an array containing information about the first office including length and width, location, and cost.
var officeTwo = [300, 200, "downtown", 25000] // This is an array containing information about the second office including length and width, location, and cost.
var officeThree = [100, 200, "downtown", 30000]// This is an array containing informationg about the third office including length and width, location, and cost.
if((officeOne[0] * officeOne[1] >= 50000) && (officeOne[2] === "downtown") && (officeOne[3] <= 25000)){// This is the condition for figuring out which of the offices is right for Hewey Design.
	var areaOne = officeArea(officeOne[0], officeOne[1]);// This is a variable calling the fuction and storing the results of the math in the function.
	function officeArea(l, w){//This is the function that does the math for the area of each office.
		var area = l * w;
		return area;
	}	
	/* This is the console.log that prints out a message containing the information about office one if it is right for Hewey design. */console.log("It looks like Office One is the office for Hewey Design! It has a total of " + areaOne + " square feet of area. It is in the " + officeOne[2] + " area and costs a total of " + officeOne[3] + "$.");
} else if((officeTwo[0] * officeTwo[1] >= 50000) && (officeTwo[2] === "downtown") && (officeTwo[3] <=25000)){ // This is the else if part of the condition to decide if office two is right for hewey design.
	var areaTwo = officeArea(officeTwo[0], officeTwo[1]);// This is a variable calling the function to discover the area of office two and store the number.
	/* This is the console.log that prints out a message containing the information about office two if it is right for Hewey design. */console.log("It looks like Office Two is the office for Hewey Design! It has a total of " + areaTwo + " square feet of area. It is in the " + officeTwo[2] + " area and costs a total of " + officeTwo[3] + "$.");
} else if((officeThree[0] * officeThree[1] >= 50000) && (officeThree[2] === "downtown") && (officeThree[3] <=25000)){// This is the next else if part of the condition to see if office three is right for hewey design.
	var areaThree = officeArea(officeThree[0], officeThree[1]);// This is a variable calling the fuction again and storing the are for the third office.
	/* This is the console.log that prints out a message containing the information about office three if it is right for Hewey design. */console.log("It looks like Office Three is the office for Hewey Design! It has a total of " + areaThree + " square feet of area. It is in the " + officeThree[2] + " area and costs a total of " + officeThree[3] + "$.");
} else{ //This is the else part of the condition in case none of the offices are right for hewey design.
	console.log("None of the offices are right for Hewey Design! Continue looking!");// This is the console.log that prints out two sentances in case none of the offices are correct for Hewey Design.
}