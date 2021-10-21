var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	

	//add onclick event handler for each image
document.getElementById("expresso").onclick = expresso;
document.getElementById("cappuccino").onclick = cappuccino;
document.getElementById("addorder").onclick = addorder;
	
	// for click event add item to order and update total

function addorder()
{
	let total = 0;


	for (var i = 0; i < totalorder.length; i++)
   {
	   total += parseFloat(totalorder[i]);
	   
   }
   document.getElementById("&nbsp;").innerHTML = "Total: " + total;
}
	// display order and total

	
		
}; // end onload


const totalorder = [];

function expresso()
{
	var x = parseFloat(1.95);
	document.getElementById("order").innerHTML = "$1.95- Espresso - Delicious espresso, wanna try it?"
	totalorder.push(x);
};

function cappuccino()
{
	var x = parseFloat(3.45);
	document.getElementById("order").innerHTML = "$3.45 - Cappuccino - Delicious Cappuccino!"
	totalorder.push(x);
};

function addorder()
{
	let total = 0;


	for (var i = 0; i < totalorder.length; i++)
   {
	   total += parseFloat(totalorder[i]);
	   
   }
   document.getElementById("&nbsp;").innerHTML = "Total: " + total;
};