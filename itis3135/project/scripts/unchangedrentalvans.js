
         

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
var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
$("#formpayment").submit(
    function(event) {
        var isValid = true;
        
        // validate the name entry
        var name = $("#name").val().trim();
        if (name == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } 
        else {
            $("#name").val(name);
            $("#name").next().text("");
        }
        $("#name").val(name);
                    
        // validate the email entry with a regular expression
        var email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email); 
        
        // validate the phone number
        var phone = $("#telephonenumber").val().trim();
        if (phone == "") { 
            $("#telephonenumber").next().text("This field is required.");
            isValid = false; 
        } else {
            $("#telephonenumber").next().text("");
        }
        $("#telephonenumber").val(phone);
        
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();				
        }
    } // end function
);	// end submit
 
     
        

        

 });
/*
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





 }*/