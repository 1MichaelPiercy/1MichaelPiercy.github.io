$(document).ready(function(){


  $.getJSON("homeparagraphs.json", function(data){

    $.each(data, function(){

      $.each(this, function(key, value){

        $("#paragraph").append(
            value.paragraphone +
            value.paragraphtwo
        )

      });

    });

});


});
