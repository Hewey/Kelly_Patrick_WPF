/* 
Patrick Kelly
December 4,2014
Expressions Worksheet
*/

//alert("Sup Brah");

//Calculate how old Sparky the pit bull is in dog years based on his actual age.

var sparkyAge = 1; //This a variable created using the given information of Sparky's age.
var humanAge= sparkyAge * 7; //This is a result variable using the sparkyAge variable multiplied by 7 to calculate Sparky's age in human years.
console.log("Sparky is " + humanAge + " human years old which is " + sparkyAge + " in dog years.") //This will print the results in the console. The console should print, "Sparky is 7 human years old which is 1 in dog years."

//Create an expression that calculates how much pizza each partygoer will get at the party.

var pizzaSlices = 8; //This is the variable representing the ammount of slices of pizza.
var partyPeople = 12; //This the variable for the ammount of people at the party. 
var pizzaNu = 2; //This is the variable for the ammount of pizzas at the party.
var slicesPp = pizzaSlices * pizzaNu/partyPeople; //This is the results variable to calculate how many slices of pizza a partygoer gets.
console.log("Each person ate " + slicesPp + " slices of pizza at the party."); //This is the results being printed out in the console and integrated into the required sentance.

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

var pizzaSlices = 8; //This is the variable representing the ammount of slices of pizza.
var partyPeople = 12; //This the variable for the ammount of people at the party. 
var pizzaNu = 2; //This is the variable for the ammount of pizzas at the party.
var sparkySlices = pizzaSlices * pizzaNu % partyPeople; //This is the variabled containing the expression that will find the ammount of slices of pizza sparky gets at the end of the party.
console.log("Sparky gets " + sparkySlices + " slices of pizza.") //This is the function that will print out the answer to the correct ammount of slices in the required sentance.

//Calculate the total ammount spend on groceries in the past 5 weeks and the average spend on groceries in the last 5 weeks.

var groceryList = [200, 187, 205, 192, 223]; //This is the array that contains the totals of 5 differant weeks of groceries.
var total = groceryList[0] + groceryList[1] + groceryList[2] + groceryList[3] + groceryList[4]; //This is the variable that contains the math mathmatical expression for solvint the total ammount of the 5 weeks worth of groceries by adding the numbers in the array together.
//console.log(total); //This console.log that I used to test the total varible to make sure it worked.
var average = total/5; //This is the variable containing the mathmatical expression to solve the average of the money spend on groceries in the past five weeks. Since the variable total already gave us the total for the 5 weeks all I had to do was use that variable and divide by five to get the average.
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week."); //This is the function I used to print out the required sentance containing the answers gained from the expressions.

//Calculate the discounted price of an item.

var originalPrice = 500; //This is the variable for the orignal price of the item which will be used in the resutls variables.
var discount = 20; //This is the discount percentage for the item which will be used in the discountedPrice variable.
var item = "Graphics Card"; //This is the item that is on sale that will be used in the final console.log.
var tax = 7; //This is the precent of sales tax on the item which will be used in the discountTax variable.
var discountPrice = originalPrice - (originalPrice * (discount/100)); //This is the variable for solving the discounted price of the item without sales tax.
//console.log(discountPrice); //This is the console.log that I used to test the discountPrice variable that I used to make sure that it was correct.
var discountTax = discountPrice + (discountPrice * (tax/100)); //This is the variable for solving the cost of the item plus sales tax. Since the discount was already discovered in the discountPrice variable so I used that to find the total plus sales tax.
console.log("Your " + item + " was originally $" + originalPrice + ", but after " + discount + "% discount, it is now $" + discountPrice + " without tax, and $" + discountTax + " with tax"); //This is the console.log that printed out the required sentace with answers to the questions.