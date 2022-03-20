const drums = document.querySelectorAll(".drum");
drums.forEach(function(drum){
    drum.addEventListener("click", function(){
        alert("I got clicked");
    });
});