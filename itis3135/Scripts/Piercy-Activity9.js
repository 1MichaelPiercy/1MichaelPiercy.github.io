$(document).ready(function() {

    
    

        // get the image URL and caption for each image
var imagearray = [];
//var captionarray = [];
//var numberimage = 0;


        // preload the image for each link
        $("#image_list img").each(function(){
            

            imagearray.push($(this).attr("src, alt"));
            //captionarray.push($(this).attr("title"));

        });
//var lengthImagearray = imagearray.length - 1;


$(".next").click(function(evt){

    var cimg = $("#active");
    var imagenext = cimg.next();

    if(imagenext.length){
        cimg.remove("active").css("z-index", -10);
        imagenext.addClass("active").css("z-index", 10)
    };

    evt.preventDefault();
});

        // set up the event handlers for each link




        $("#image_list a").click(function(evt){

            //will swap the image
            //this gets the url of picture
            var pictureUrl = $(this).attr("src");
            //this swaps the picture
            $("#image").attr("src", pictureUrl);

            //this gets the caption
            var receivecaption = $(this).attr("alt");

            //this will swap the captions
            $("#caption").text(receivecaption);

        
        

            // cancel the default action of each link
evt.preventDefault();
});

    // move the focus to the first link

}); // end ready
//https://code.jquery.com/jquery-3.1.1.min.js