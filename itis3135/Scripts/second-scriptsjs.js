


let companyName = "Machinelike Python";


 
    var mynumber = 0;

    function oneNumber() 
    {
       return mynumber = parseInt(prompt("Hello, this is the " + companyName +  " and we are hoping you are doing well." + 
       "\nThe Machinelike Python would like to know how many sides your shape has:"));

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
    else 
    {
        alert("decagon");
    }
}

function validateEntry() 
{

oneNumber();

  while ((mynumber < 11) != (mynumber > 0))
 {
    mynumber = parseInt(prompt("Error, re-enter a value from 1 - 10.\n" + "Hello, this is the " + companyName +  " and we are hoping you are doing well." + 
    "\nThe Machinelike Python would like to know how many sides your shape has:"));
 }
 
 getShape();
 
 
}











