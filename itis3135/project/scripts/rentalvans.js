

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

}); // end ready
//https://code.jquery.com/jquery-3.1.1.min.js

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