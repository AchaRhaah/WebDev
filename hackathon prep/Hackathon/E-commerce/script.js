// alert("yes");
const bars = document.querySelector(".cat");
// const Close = document.querySelector(".fa-times");
const cart = document.querySelector(".cart");


bars.addEventListener("click", function(){
    cart.style.right = "0";
});

Close.addEventListener("click", function(){
    cart.style.right = "-200px";
});