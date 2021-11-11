


$(document).ready(function() {

    
    

       // get the image URL and caption for each image
var imagearray = [];



        // preload the image for each link
        $("#image_list a").each(function(){
            

            imagearray.push($(this).attr("href, title"));
          

        });


//https://www.bing.com/videos/search?q=JQuery+to+create+a+slideshow+of+images+with+a+gallery&ru=%2fvideos%2fsearch%3fq%3dJQuery%2520to%2520create%2520a%2520slideshow%2520of%2520images%2520with%2520a%2520gallery%26FORM%3dVDVVXX&view=detail&mid=0FFE21ACFFC64B33DC7D0FFE21ACFFC64B33DC7D&&FORM=VDRVSR

$(".next").click( function(evt){
//retrieves the position of where active is at.
    var cimg = $(".active");
    //These two lines push the active class onto the next li element. 
    var imagenext = cimg.next();
    

    //checks imagenext to see if it has been assigned the active value and has a length of 1.
    if(imagenext.length){
       //will remove the active from current
        cimg.removeClass("active");
        //will assign the active class to the next li element.
        imagenext.addClass("active");
       
        

    };
//if image has length of 0, it is at end of unordered list.
    if(imagenext.length == 0)
    {
        //will remove value from the last of the list.
        cimg.removeClass("active");
        //finds the li element with the id value of first and reassigns active class to first element in the unordered list.
        $("#image_list #first").addClass("active");
    };


    
    //will swap the image
            //this gets the url of picture
            var pictureUrl = $(".active a").attr("href");
            //this swaps the picture
            $("#image").attr("src", pictureUrl);

            //this gets the caption
            var receivecaption = $(".active a").attr("title");

            //this will swap the captions
            $("#caption").text(receivecaption);

        
        

            // cancel the default action of each link

    
            //should only be needed when clicking on a picture directly in the list, but should be included just incase.

        evt.preventDefault();
    
});


$(".back").click( function(evt){
//gets li element with active class
    var cimg = $(".active");
    //gets the previous element before the active class.
    var previmage = cimg.prev();
    
    
//checks to see if previmage.length has a value of one. does not check to see if equal to.
    if(previmage.length){
       //removes active from current li element.
        cimg.removeClass("active");
        //adds active class to previous li element.
        previmage.addClass("active");

      
    };
//if length is 0, it goes from the beginning of the list straight to the end.
    if(previmage.length == 0)
    {
        //this removes the class active on current li element.
        cimg.removeClass("active");
        //moves active class from the first id to the last id in the li element list.
        $("#image_list #last").addClass("active");
    };
//this just swaps the image.
    //this gets the url of picture
    var pictureUrl = $(".active a").attr("href");
    //this swaps the picture
    $("#image").attr("src", pictureUrl);

    //this gets the caption
    var receivecaption = $(".active a").attr("title");

    //this will swap the captions
    $("#caption").text(receivecaption);

//should only be needed when clicking on a picture directly in the list, but should be included just incase.
        evt.preventDefault();
    
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

    // move the focus to the first link

}); // end ready
//https://code.jquery.com/jquery-3.1.1.min.js