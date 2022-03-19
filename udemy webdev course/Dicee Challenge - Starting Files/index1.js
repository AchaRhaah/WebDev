const links = [
    {img: "images/dice1.png"},
    {img: "images/dice2.png"},
    {img: "images/dice3.png"},
    {img: "images/dice4.png"},
    {img: "images/dice5.png"},
    {img: "images/dice6.png"},
]
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let refreshMe = document.querySelector("h1")
let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
const link1 = links[randomNumber1-1];
const link2 = links[randomNumber2-1];

img1.src = link1.img;
img2.src = link2.img;

if(randomNumber1 > randomNumber2){
    refreshMe.textContent = "Player1 Wins!!!"
}
if(randomNumber1 < randomNumber2){
    refreshMe.textContent = "Player2 Wins!!!"
}
if(randomNumber1 == randomNumber2){
    refreshMe.textContent = "Draw"
}
