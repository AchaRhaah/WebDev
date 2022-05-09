var nav = document.querySelector("nav");
var bdy = document.querySelector(".bdy")
function bgChanger(){
    if(this.scrollY > 10){
        // alert("yh")
        nav.style.background = "#011627";
    }
    else{
        nav.style.background = "#eaf4f4";
    }
}
window.addEventListener("scroll", bgChanger);
