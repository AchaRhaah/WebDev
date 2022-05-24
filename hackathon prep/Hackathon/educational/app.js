let hero = document.querySelector('.hero');
let section2= document.querySelector('.values'); 
let stats = document.querySelector('.stats');
// console.log( hero.clientHeight);
function bgChanger(){
    if(this.scrollY > hero.clientHeight/3){
        // alert("good");
        hero.style.background = "white";  
    }
    else{
        hero.style.background = "#e9ecef";
    }
    if(this.scrollY > (hero.clientHeight + section2.clientHeight + stats.clientHeight)/1.28){
        stats.style.background = "#e9ecef";
        document.body.style.background = "#e9ecef"
    }
    else{
        stats.style.background = "#ffffff";
        document.body.style.background = "#ffffff";
    }
}
window.addEventListener("scroll", bgChanger);