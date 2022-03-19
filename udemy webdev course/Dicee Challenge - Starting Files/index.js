let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let refreshMe = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    refreshMe.textContent = "Player1 Wins!!!"
}
if(randomNumber1 < randomNumber2){
    refreshMe.textContent = "Player2 Wins!!!"
}
if(randomNumber1 == randomNumber2){
    refreshMe.textContent = "Draw"
}
if(randomNumber1 == 1 ){
    img1.setAttribute("src","images/dice1.png")
}
if(randomNumber1 == 2){
    img1.setAttribute("src","images/dice2.png")
}
if(randomNumber1 == 3){
    img1.setAttribute("src","images/dice3.png")
}
if(randomNumber1 == 4){
    img1.setAttribute("src","images/dice4.png")
}
if(randomNumber1 == 5){
    img1.setAttribute("src","images/dice5.png")
}
if(randomNumber1 == 6){
    img1.setAttribute("src","images/dice6.png")
}
if(randomNumber2== 1 ){
    img2.setAttribute("src","images/dice1.png")
}
if(randomNumber2== 2){
    img2.setAttribute("src","images/dice2.png")
}
if(randomNumber2== 3){
    img2.setAttribute("src","images/dice3.png")
}
if(randomNumber2== 4){
    img2.setAttribute("src","images/dice4.png")
}
if(randomNumber2== 5){
    img2.setAttribute("src","images/dice5.png")
}
if(randomNumber2== 6){
    img2.setAttribute("src","images/dice6.png")
}
