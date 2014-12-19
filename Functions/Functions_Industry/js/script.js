/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

//Hewey designs is looking for a new office. They have chosen 3 and need to see if they fit what they are looking for.

var officeOne = [400, 300, "suburbs", 15000]
var officeTwo = [300, 200, "downtown" 25000]
var officeThree = [100, 200, "downtown" 30000]
if((officeOne[0] * officeOne[1] >= 75000) && (officeOne[2] === "downtown") && (officeOne[3] <= 25000)){
	function officeOneArea(l, w){
		var area = l * w;
		return area;
	}	
}