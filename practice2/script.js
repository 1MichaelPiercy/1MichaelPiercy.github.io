//https://code.jquery.com/jquery-1.9.1.min.js
//jquery/jquery-3.6.0.min.js

$(document).ready(function() {
    const links = document.querySelectorAll("a");
    for (let link of links){
        const image = new Image();
        image.src = link.href;
    }
 });