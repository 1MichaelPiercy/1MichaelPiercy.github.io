//arrays



window.onload = function ()
{
    //these require functions after having button pressed.

    document.getElementById("displayresults").onclick = displayResults;
    document.getElementById("addperson").onclick = addSalary;
    document.getElementById("displaySalary").onclick = displaySalary;
    document.getElementById("deleterow").onclick = deleteRows;
    document.getElementById("dropmenu").onclick = dropDown;

    
    
    
}
const person = [];
const salaries = [];




function addSalary()
{
 


 //https://www.w3resource.com/javascript/form/all-letters-field.php
 //this will allow for the words to be checked for letters only. I know the inside of the bracket looks over the letters and matches them.
 // then the two items on the outside is what probably is used to differientiat from special characters and letters.
 let checkword = /^[A-Za-z]+$/;


var word = null;
var number = 0;


word = document.getElementById("inputName").value;

number = document.getElementById("inputSalary").value;

if (word.match(checkword) ==  null)
{

    alert("Renenter name!");

}




if (isNaN(number) == true)
{
     alert("Reenter salary!");
    
}



if ((isNaN(number) != true) == (word.match(checkword) !=  null))
{
    salaries.push(number);
    person.push(word);

}



document.getElementById("inputName").focus();

 }


function displayResults()
{

    if (salaries.length == 0)
    {
       // alert("Error, no salaries entered.")
         document.getElementById("resultsFirst").innerHTML = "Error, no data entered.";
         document.getElementById("resultsSecond").innerHTML = "Error, no data entered.";
    }
let total = 0;


 for (var i = 0; i < salaries.length; i++)
{
    total += parseInt(salaries[i]);
    
}

let average = Math.round(total / salaries.length);



document.getElementById('resultsTitle').innerHTML = "Results";

document.getElementById("resultsFirst").innerHTML = "Average Pay: $" + average + ".";
document.getElementById("resultsSecond").innerHTML = "Highest Pay: $" + Math.max(...salaries) + ".";



}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insert_deleterow
function displaySalary()
{
    
    
    var tbody = document.getElementById("table");

    
//ends up creating and filling in the row
   for (let r = 0; r < salaries.length; r++)
   {
       //this makes a new row.
    var row = table.insertRow(r);

    //this adds two blocks to be filled in the table
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    //this fills in the two blocks with their respectable data.
    cell1.innerHTML = person[r];
    cell2.innerHTML = salaries[r];
   }
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_deleterow

function deleteRows() {
    //this deletes one row at a time. Specifically what ever information is in the first spot or what is cosidered the 0 spot.
    return document.getElementById("table").deleteRow(0);
    
  }
 //https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
  function dropDown()
  {
      //this allows access to help store data in the drop down menu.
    var options = document.getElementById("dropmenu"); 
    
    //This is required to keep it from adding extra items. Specifically to keep it from adding extra info after hitting any of the other buttons.
    options.innerHTML = "";
    

    for(let i = 0; i < person.length; i++)
    {
        //stores info from person into the variable

       var variable = person[i];
       //adds to the dropdown menu.
       options.innerHTML += "<option value = \"" + variable + "\">" + variable + "</option>";
    }
  }

