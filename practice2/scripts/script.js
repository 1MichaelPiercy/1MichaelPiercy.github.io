
//scripts/jquery-3.6.0.min.js


$(document).ready(function() {
    const links = document.querySelectorAll("a");
    for (let link of links){
        const image = new Image();
        image.src = link.href;
    }
 });

 
 
 document.addEventListener("DOMContentLoaded", () => {
    const caption = $("#Caption");
    const mainImage = $("#mainimage");

    const imageLinks = $("#imagelist").querySelectorAll("a");
    
        const image = new Image();
        image.src = link.href;

        link.addEventListener("click", evt => {
            mainImage.src = link.href;
            mainImage.alt = link.title;
            caption.textContent = link.title;
            evt.preventDefault();
        });

   
    imageLinks[0].focus();
 })