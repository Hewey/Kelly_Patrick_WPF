/* 
Patrick Kelly
December 4,2014
Expressions
*/

//alert("Sup brah!");

//Hewey Designs is moving offices and is adding more team members. They need to know how many chairs they need because they are replacing all the chairs for the new office and how much it will cost. They also need more computers and need to know how much that will cost.

var currentOffice = [10, 4, 5, 1];
var chairCost = 150;
var newMembers = 6;
var tax = 9;
var computerCost = 1000;

var totalMembers = currentOffice[0] + currentOffice[1] + currentOffice[2] + currentOffice[3] + newMembers;
//console.log(totalMembers); //Tested that my expression was correct.
var chairTotal = totalMembers * 150;
var chairTtax = chairTotal + (chairTotal * (tax/100));
//console.log(chairTtax);
var computerTotal = computerCost * newMembers;
var computerTtax = computerTotal + (computerTotal * (tax/100));
console.log("Hewey Designs has a total of " + totalMembers + " new members. This means that they need " + totalMembers + " new chairs. The new chairs will cots $" + chairTotal + " before tax and $" + chairTtax + " with tax. The new computers for the " + newMembers + " new members will cost $" + computerTotal + " before tax and $" + computerTtax + " after tax.")