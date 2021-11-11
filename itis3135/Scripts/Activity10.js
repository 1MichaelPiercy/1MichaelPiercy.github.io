$(document).ready(function() {


        $("li:first-child a").focus();
        var imagearray = [];



        // preload the image for each link
        $("#image_list a").each(function(){
            

            imagearray.push($(this).attr("href"));
          

        });

        // set up the event handlers for each link
        
$("#image_list a").click(function(evt){


        

    			// get the image URL and caption for each image and animate the caption
                           
                            var receivecaption = $(this).attr("title");
                                var pictureUrl = $(this).attr("href");
                           
                            //$("#image").attr("src", pictureUrl);

                            $("#caption").fadeOut(3000, function(){

                                $("#caption").text(receivecaption).fadeIn(3000);
                                $("#caption").animate({fontSize: "2em"}, 3000);
                            });
                            $("#image").fadeOut(3000, function(){
                                

                                $("#image").attr("src", pictureUrl).fadeIn(3000);
                                

                            });
                            
                            
                            
                           // $("#caption").text(receivecaption);

                           

            // cancel the default action of each link
            evt.preventDefault();
        });

    // move the focus to the first link

}); // end ready

//https://code.jquery.com/jquery-3.1.1.min.js