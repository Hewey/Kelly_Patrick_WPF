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
	var areaOne = officeOneArea(officeOne[0], officeOne[1]);
	function officeOneArea(l, w){
		var area = l * w;
		return area;
	}	
	console.log(areaOne);
} else if((officeTwo[0] * officeTwo[1] >= 50000) && (officeTwo[2] === "downtown") && (officeTwo[3] <=25000)){
	var areaTwo = officeOneArea(officeTwo[0], officeTwo[1]);
	console.log("It looks like Office Two is the office for Hewey Design! It has a total of " + areaTwo + " square feet of area. It is in the " + officeTwo[2] + " area and costs a total of " + officeTwo[3] + "$.");
}