/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

var welcome = prompt("Welcome to the pie throwing similator. Please enter the first the number of throws you want to make.");

if(isNaN(welcome)){
	console.log("Please enter a number. I can not do math with words.");
}else{
	var pieHits = function(h){
	var acc = [30, 100, 50, 75];
	var chance = acc[Math.floor(Math.random()*acc.length)];
	var hitMiss = h *(chance / 100);
	//console.log(hitMiss);
	return hitMiss;
}

var total = pieHits(welcome);
console.log(total);
}


