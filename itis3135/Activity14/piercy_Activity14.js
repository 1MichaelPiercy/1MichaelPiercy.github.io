$(document).ready(function() {
	
    $("#toobin").click(function(){

        $.getJSON("json_files/toobin.json", function(data){

            $.each(data, function(){
    
              $.each(this, function(key , value){
                $("#printtitle").empty();
                $("#printmonth").empty();
                $("#printpicture").empty();
                $("#paragraph1").empty();
                $("#printname").empty();
    
                $("#printtitle").append(
                    value.title
                )
                $("#printmonth").append(
                    value.month
                )
                $("#printname").append(
                    value.speaker
                )
                $("#printpicture").append(
                    $("#printpicture").attr("src",value.image) 
                )
                $("#paragraph1").append(
                    value.text
                )

    
              });
    
            });
    
        });
    });
    $("#sorkin").click(function(){

        $.getJSON("json_files/sorkin.json", function(data){

            $.each(data, function(){
    
              $.each(this, function(key , value){
                $("#printtitle").empty();
                $("#printmonth").empty();
                $("#printpicture").empty();
                $("#paragraph1").empty();
                $("#printname").empty();
    
                $("#printtitle").append(
                    value.title
                )
                $("#printmonth").append(
                    value.month
                )
                $("#printname").append(
                    value.speaker
                )
                $("#printpicture").append(
                    $("#printpicture").attr("src",value.image) 
                )
                $("#paragraph1").append(
                    value.text
                )

    
              });
    
            });
    
        });
    });
    $("#sampson").click(function(){

        $.getJSON("json_files/sampson.json", function(data){

            $.each(data, function(){
    
              $.each(this, function(key , value){
                $("#printtitle").empty();
                $("#printmonth").empty();
                $("#printpicture").empty();
                $("#paragraph1").empty();
                $("#printname").empty();
    
                $("#printtitle").append(
                    value.title
                )
                $("#printmonth").append(
                    value.month
                )
                $("#printname").append(
                    value.speaker
                )
                $("#printpicture").append(
                    $("#printpicture").attr("src",value.image) 
                )
                $("#paragraph1").append(
                    value.text
                )

    
              });
    
            });
    
        });
    });
    $("#chua").click(function(){

        $.getJSON("json_files/chua.json", function(data){

            $.each(data, function(){
    
              $.each(this, function(key , value){
                $("#printtitle").empty();
                $("#printmonth").empty();
                $("#printpicture").empty();
                $("#paragraph1").empty();
                $("#printname").empty();
    
                $("#printtitle").append(
                    value.title
                )
                $("#printmonth").append(
                    value.month
                )
                $("#printname").append(
                    value.speaker
                )
                $("#printpicture").append(
                    $("#printpicture").attr("src",value.image) 
                )
                $("#paragraph1").append(
                    value.text
                )

    
              });
    
            });
    
        });
    });
}); // end ready