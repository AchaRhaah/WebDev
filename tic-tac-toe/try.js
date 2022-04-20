var btns = document.querySelectorAll(".btn");
var available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numArray = [];
var computerPlayArr = [];
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const num = parseInt(e.currentTarget.id);
        if(clickAuthentication(num, numArray)){
            btn.textContent = "X";
            computerPlay();

        };
       console.log(available);
       checkWins(numArray);
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
    var compIndexPlay = Math.floor(Math.random() * (max - min) + min);
    var compIndex = compIndexPlay.toString()
    var ID = document.getElementById(compIndex);
    if(clickAuthentication(compIndexPlay, computerPlayArr)){
        ID.textContent = "O";
    };
}

// clickAuthentication checks if the number assigned to the square through its ID is availalbe in the available array, 
// and returns true if it is ans false if it is not
function clickAuthentication(value, arrToBePushed){
    if(available.includes(value)){
        var index = available.indexOf(value);
        available.splice(index, 1);
        arrToBePushed.push(value);
        computerPlay();
        return true;
    }
    return false;
}
// 
var btns = document.querySelectorAll(".btn");
var available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numArray = [];
var computerPlayArr = [];
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const num = parseInt(e.currentTarget.id);
        if(clickAuthentication(num, numArray)){
            btn.textContent = "X";
            computerPlay();
        }
        alert("clicked "+num);
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
    var compIndex = computerPlay.toString
    var ID = document.getElementById(compIndex);
    var index = available.indexOf(compIndexPlay);
    if(clickAuthentication(compIndexPlay, computerPlayArr)){
        ID.textContent = "O";
    }
}
function clickAuthentication(value, arrToBePushed){
    if(available.includes(value)){
        var index = available.indexOf(value);
        available.splice(index, 1);
        console.log(available);
        arrToBePushed.push(value);
        console.log("good");
        return true;
    }
    return false;
}