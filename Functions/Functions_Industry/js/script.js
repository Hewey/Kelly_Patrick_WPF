/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

//Hewey design is looking for a new office. They have chosen 3 and need to see if they fit what they are looking for.

var officeOne = [400, 300, "suburbs", 15000]
var officeTwo = [300, 200, "downtown", 25000]
var officeThree = [100, 200, "downtown", 30000]
if((officeOne[0] * officeOne[1] >= 50000) && (officeOne[2] === "downtown") && (officeOne[3] <= 25000)){
	var areaOne = officeArea(officeOne[0], officeOne[1]);
	function officeArea(l, w){
		var area = l * w;
		return area;
	}	
	console.log("It looks like Office One is the office for Hewey Design! It has a total of " + areaOne + " square feet of area. It is in the " + officeOne[2] + " area and costs a total of " + officeOne[3] + "$.");
} else if((officeTwo[0] * officeTwo[1] >= 50000) && (officeTwo[2] === "downtown") && (officeTwo[3] <=25000)){
	var areaTwo = officeArea(officeTwo[0], officeTwo[1]);
	console.log("It looks like Office Two is the office for Hewey Design! It has a total of " + areaTwo + " square feet of area. It is in the " + officeTwo[2] + " area and costs a total of " + officeTwo[3] + "$.");
} else if((officeThree[0] * officeThree[1] >= 50000) && (officeThree[2] === "downtown") && (officeThree[3] <=25000)){
	var areaThree = officeArea(officeThree[0], officeThree[1]);
	console.log("It looks like Office Two is the office for Hewey Design! It has a total of " + areaThree + " square feet of area. It is in the " + officeThree[2] + " area and costs a total of " + officeThree[3] + "$.");
}