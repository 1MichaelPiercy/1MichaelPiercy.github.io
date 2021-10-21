var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
document.getElementById("intakeCalorie").onclick = updateCalorie;
document.getElementById("Average").onclick = showAverageCalories;
};

function updateCalorie()
{
    var weekday = document.getElementsById("radio").value;
    var caloriesinput = document.getElementById("calorie").value;

    caloriesinput = parseInt(calories);
    
    
    let checkweekday = /^[A-Za-z]+$/;
    
    if (isNaN(caloriesinput) == true)
    {
         alert("Enter a valid number");
        
    }

    if ((isNaN(caloriesinput) != true) == (weekday.match(checkweekday) !=  null))
{
    days.push(weekday);

   calories.push(caloriesinput);

}
}

function showAverageCalories()
{
var average = 0;

for (let i = 0; i < calories.length; i++)
{
    average
}
}
