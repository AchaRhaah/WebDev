var btns = document.querySelectorAll(".btn");
var available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numArray = [];
var computerPlayArr = [];
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        computerPlay();
        const num = parseInt(e.currentTarget.id);
        if(clickAuthentication(num, numArray)){
        btn.textContent = "X";
        }
    });

});
function checkWins(arr){
    for(var i = 0; i < arr.length; i++){
        if((arr[i] == 1 && arr[i+1] == 2 && arr[i+2] == 3) ||
        (arr[i] == 4 && arr[i+1] == 5 && arr[i+2] == 6) ||
        (arr[i] == 7 && arr[i+1] == 8 && arr[i+2] == 9) ){
            alert("win");
        }
    }
}
function computerPlay(){
    let max = Math.max.apply(null, available);
    let min = Math.min.apply(null, available);
    var compIndexPlay = (Math.floor(Math.random() * (max - min)) + min);
    var compIndex = compIndexPlay.toString();
    var ID = document.getElementById(compIndex);
    var index = available.indexOf(compIndexPlay);
    clickAuthentication()
    available.splice(index, 1);
    ID.style.background = "red";
}
function clickAuthentication(value, arrToBePushed){
    if(available.includes(value)){
        var index = available.indexOf(value);
        available.splice(index, 1);
        arrToBePushed.push(value);
        return true;
    }
    return false;
}