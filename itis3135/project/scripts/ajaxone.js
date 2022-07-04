

$(document).ready(function() {
    $.getJSON("rvans.json", function(data){

        $.each(data, function(){

          $.each(this, function(key , value){

            $("#reviewparagraph").append(
                "Name: " + value.name + "<br>" +
                "Rating: " + value.stars + "<br>" +
                "Review: " + value.review + "<br><br>"
            )

          });

        });

    });
});