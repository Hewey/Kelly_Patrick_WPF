/*
Patrick Kelly
SDI 
Go To Training Week 3
12/10/2014
*/

//alert("Sup Bruh");
 var bowlOfFruit = ["Apple", "Banana", "Pear", "Peach", "Pear", "Tomato", "Kiwi", "Pear", "Banana", "Pear"];
 console.log(bowlOfFruit[1]);

 console.log(bowlOfFruit.length);

var totalNumPears = 0;

if(bowlOfFruit[0] === "Pear"){
	console.log("This fruit is a Pear");
	totalNumPears++;
} else {
	console.log("This fruit is not a Pear.");
}

if(bowlOfFruit[1] === "Pear"){
	console.log("This fruit is a Pear");
	totalNumPears++;
} else {
	console.log("This fruit is not a Pear.");
}

if(bowlOfFruit[2] === "Pear"){
	console.log("This fruit is a Pear");
	totalNumPears++;
} else {
	console.log("This fruit is not a Pear.");
}

if(bowlOfFruit[3] === "Pear"){
	console.log("This fruit is a Pear");
	totalNumPears++;
} else {
	console.log("This fruit is not a Pear.");
}

console.log("There are " + totalNumPears + " number of pears in the bowl.");

var pearNumber = 0;

for(var i = 0; i<bowlOfFruit.length; i++){
	console.log("Inside of the loop" + i);
	console.log(bowlOfFruit[i]);

	if(bowlOfFruit[i]==="Pear"){
		pearNumber++;
		console.log("This fruit is a pear.");

	}else{
		console.log("This fruit is not a pear.");
	}
}

console.log("The total number of pears is " + pearNumber);