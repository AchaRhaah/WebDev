const bars = document.querySelector(".fa-bars");
const Close = document.querySelector(".fa-times");
const nav = document.querySelector(".nav-links");


bars.addEventListener("click", function(){
    nav.style.right = "0";
});

Close.addEventListener("click", function(){
    nav.style.right = "-200px";
});


// // alternate method
// bars.addEventListener("click", function(){
//     showMenu();
// });

// Close.addEventListener("click", function(){
//    hideMenu();
// });

// function showMenu(){
//     nav.style.right = "0";
// }
// function hideMenu(){
//     nav.style.right = "-200";
// }




