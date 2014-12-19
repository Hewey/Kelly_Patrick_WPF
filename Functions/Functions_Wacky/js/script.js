/* 
Patrick Kelly
December 18,2014
Fuctions
*/

//alert("Sup Brah");

var welcome = prompt("Welcome to the pie throwing similator. Please enter the first the number of throws you want to make.");

var pieHits = function(h){
	var acc = [30, 100, 50, 75];
	var chance = acc[Math.floor(Math.random()*acc.length)];
	var hitMiss = h *(chance / 100);
	console.log(hitMiss);
}

pieHits(welcome);

