document.addEventListener("DOMContentLoaded", function(){
let box = document.querySelectorAll(".clickbox");

box.forEach(function(clickbox){

    clickbox.addEventListener("click", function(){

        // если цвет сейчас lightsteelblue
        if (clickbox.style.backgroundColor === "lightsteelblue") {
            clickbox.style.backgroundColor = "yellow";
            clickbox.style.margin = "2vw";
            console.log("change color");
        } 
        else {
            clickbox.style.backgroundColor = "lightsteelblue";
            clickbox.style.margin = "1vw";
        }

    });

});


let button = document.querySelector(".clickbox");

button.addEventListener("click", function() {
    button.classList.toggle("active");
});






})