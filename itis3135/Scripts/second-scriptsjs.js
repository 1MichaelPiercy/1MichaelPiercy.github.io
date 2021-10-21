


let companyName = "Machinelike Python";

window.onload = function()
{
    validateEntry();
}
 
    var mynumber = 0;

    function oneNumber() 
    {
        mynumber = parseFloat(prompt("Hello, this is the " + companyName +  " and we are hoping you are doing well." + 
       "\nThe Machinelike Python would like to know how many sides your shape has:"));
       var newNumber = mynumber;
return mynumber = Math.abs(Math.round(newNumber));
    }

   
  

function getShape() {
    if (mynumber == 1) 
    {
     alert("henagon");
    }
    else if(mynumber == 2)
    {
        alert("digon");
    }
    else if(mynumber == 3)
    {
     alert("trigon");
    }
    else if(mynumber == 4)
    {
       alert("tetragon");
    }
    else if(mynumber == 5)
    {
        alert("pentagon");
    }
    else if(mynumber == 6)
    {
        alert("hexagon");
    }
    else if(mynumber == 7)
    {
        alert("heptagon");
    }
    else if(mynumber == 8)
    {
        alert("octagon");
    }
    else if (mynumber == 9)
    {
        alert("enneagon");
    }
    else if (mynumber == 10)
    {
        alert("decagon");
    }
    else 
    {
        validateEntry();
    }
}

function validateEntry() 
{

oneNumber();

  while ((mynumber > 10) != (mynumber <= 0))
 {
    mynumber = parseFloat(prompt("Error, re-enter a value from 1 - 10.\n" + "Hello, this is the " + companyName +  " and we are hoping you are doing well." + 
    "\nThe Machinelike Python would like to know how many sides your shape has:"));

    var newNumber = mynumber;
     mynumber = Math.abs(Math.round(newNumber));
 }
 
 getShape();
 
 
}











