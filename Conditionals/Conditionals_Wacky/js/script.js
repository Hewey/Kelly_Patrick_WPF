/* 
Patrick Kelly
December 11,2014
Conditionals
*/

//alert("Sup Bruh!");

var heroName = prompt("Hello and welcome to the \"Hero Sim\"! Please enter a name for your hero!"); //Here I created a variable that prompted the user to enter a name of their hero.
//console.log(heroName); //This was the console.log I used to make sure the varaible worked and properly stored the information.

if(heroName === ""){
	console.log("Oh no! Your hero doesn't have a name! Please enter a name for your hero!");
}else{
	var heroPower = prompt("Your hero name is " + heroName + ". Now that we have a name for your hero. Let's chose their power! Type one of the following in the box below: Speed, Strength, or Jump.")
}

