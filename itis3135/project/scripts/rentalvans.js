

$(document).ready(function() {

    
    

    // get the image URL and caption for each image




     // preload the image for each link
     $("#image_list a").each(function(){
         
var imageswap = new Image();
imageswap.src = $(this).attr("href");
         
       

     });




     $("#image_list a").click(function(evt){

         

        var thiscaption = $(this).attr("title");
        var thispictureUrl = $(this).attr("href");
        
//puts active class onto the li element that has the anchor tag that was clicked.
         $(this).parent().addClass("active");
         

         $("#caption").fadeOut(3000, function(){

            $("#caption").text(thiscaption).fadeIn(3000);
            
        });
        $("#picture").fadeOut(3000, function(){
            

            $("#picture").attr("src", thispictureUrl).fadeIn(3000);
            

        });        
/*
         //will swap the image
         //this gets the url of picture
         var pictureUrl = $(this).attr("href");
         //this swaps the picture
         $("#picture").attr("src", pictureUrl);

         //this gets the caption
         var receivecaption = $(this).attr("title");

         //this will swap the captions
         $("#caption").text(receivecaption);

*/

     
     

         // cancel the default action of each link
evt.preventDefault();
});

 // move the focus to the first link

 
//C:\Users\pierc\Desktop\itis3135\project\scripts\jquery-3.6.0.min.js
//project\scripts\jquery-3.6.0.min.js



 
     
        
$("#submit").click(function (event){

    $("#formpayment").submit(function(){
    var valid = true;
var emailPat = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var email = $("#email").val();
if (email == "")
{
    $("#email").next().text("required");
    valid = false;
}

else if ( !emailPat.test(email)){
    $("#email").next().text("required");
    valid = false;
}
if (valid == false)
{
    event.preventDefault();
}

let isname = /^[A-Za-z]+$/;
var name = $("#name").val().trim();

if (name == ""){
    $("#name").next().text("");
    valid = false;
    alert("name required")
}
else if (!isname.test(name)){
    $("#email").text("");
    valid = false;
    alert("name required")
}

if (valid == false)
{
    event.preventDefault();
}

var dayoweek = $("#pickup").val();
dayoweek = $('jqueryselector').val($(dayofweek).val().toUpperCase());

if (dayoweek == "MONDAY")
{
    valid = true;
}
else if (dayoweek == "TUESDAY"){
    valid = true;
}
else if (dayoweek == "WENDSDAY"){
    valid = true;
}
else if(dayoweek == "THURSDAY"){
    valid = true;
}
else if (dayoweek == "FRIDAY"){
    valid = true;
}
else if (dayoweek == "SATURDAY") {
    valid = true;
}
else if (dayoweek == "SUNDAY"){
valid = true;
}
else{
    $("#pickup").next().text("required");
    valid = false;
}

if (valid == false)
{
    event.preventDefault();
}

});
});
        

 });

 window.onload = function () {
    document.getElementById("dropmenu").onclick = addreview;

}


const person = [];
const reason = [];
const stars = [];

function addreview()
{
 


 
 let checkword = /^[A-Za-z]+$/;


var word = null;
var reasonword = null;
var number = 0;


word = document.getElementById("Name").value;

reasonword = document.getElementById("reason").value;

number = document.getElementById("stars").value;

if (word.match(checkword) ==  null)
{

    alert("Renenter name!");

}


if (reasonword.match(checkword) ==  null)
{

    alert("Renenter review!");

}


if (isNaN(number) == true)
{
     alert("Reenter salary!");
    
}



if ((isNaN(number) != true) == (word.match(checkword) !=  null))
{
    if(reasonword.match(checkword) != null){
    stars.push(number);
    person.push(word);
    reason.push(reasonword);
    }

}





 }