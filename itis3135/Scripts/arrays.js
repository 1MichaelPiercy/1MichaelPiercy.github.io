//arrays

window.onload = function ()
{
    document.getElementById("displayresults").onclick = displayResults;
    document.getElementById("addperson").onclick = addSalary;
    document.getElementById("displaySalary").onclick = displaySalary;
    
}
const person = [];
const salaries = [];




function addSalary()
{
 var x = prompt("How many people would you like to put in?");
 parseInt(x);

 for(let i = 0; i < x; i++)
 {
person.push(prompt("Enter Name: " + (i+1)));
salaries.push(prompt("Enter Salary: " + (i+1)));
 }
}

function displayResults()
{

   /* // if (salaries.length == 0)
    {
       // alert("Error, no salaries entered.")
         document.getElementById("resultsFirst").innerHTML = "Error, no data entered.";
         document.getElementById("resultsSecond").innerHTML = "Error, no data entered.";
    }*/
let total = 0;


 for (var i = 0; i < salaries.length; i++)
{
    total += salaries[i];
    
}

let average = total / i;

// had help from a website for the Math.max. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

document.getElementById('resultsTitle').innerHTML = "Results";

document.getElementById("resultsFirst").innerHTML = "Average Pay: $" + average + ".";
document.getElementById("resultsSecond").innerHTML = "Highest Pay: $" + Math.max(...salaries) + ".";



}

function displaySalary()
{

}