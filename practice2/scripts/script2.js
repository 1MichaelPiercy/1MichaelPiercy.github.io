
//https://code.jquery.com/jquery-3.1.1.min.js
$(document).ready(function() {
    // get the image URL and caption for each image
var imagearray = [];
$("#image_list a").each(function(){
            

    imagearray.push($(this).attr("href, title"));
  

});

$("#image_list a").click(function(evt){

            
    //searches the children of image_list for the active class and removes it.
                $("#image_list .active").removeClass("active");
    
               
    //puts active class onto the li element that has the anchor tag that was clicked.
                $(this).parent().addClass("active");
    
                
    
                //will swap the image
                //this gets the url of picture
                var pictureUrl = $(this).attr("href");
                //this swaps the picture
                $("#image").attr("src", pictureUrl);
    
                //this gets the caption
                var receivecaption = $(this).attr("title");
    
                //this will swap the captions
                $("#caption").text(receivecaption);
    
    
    
            
            
    
                // cancel the default action of each link
    evt.preventDefault();
    });
});