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
console.log("You will need " + wallArea + " wooden planks in total to complete your wall. That turns out to be " + rawWood + " raw wood.");
console.log("I created this because I really enjoy playing minecraft and finding the exact number of blocks for things can sometimes be annyoing. I decided to make this because I know very shortly in one of my projects I'm going to need to build these walls and will need quite a lot of wood to do so. I thought it would be handy to make this to know exaclty how much wood I would need.")