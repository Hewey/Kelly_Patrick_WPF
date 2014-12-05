/*
Patrick Kelly
December 4, 2014
Expressions
*/

//alert("Sup Brah!");

//Minecraft raw wood to wooden planks calculator for building walls.

var wallHeight = prompt("Please enter the height of the wall you want build.");
var wallWidth = prompt("Please enter the width of the wall you want to build.");
var wallArea = wallHeight * wallWidth;
//console.log(wallArea); //Here I tested that I correctly saved information from the user and was able to use it in an expression.
var rawWood = Math.ceil(wallArea/4);
console.log("You will need " + wallArea + " wooden planks in total to complete your wall. That turns out to be " + rawWood + " raw wood. With ");