var btns = document.querySelectorAll(".btn");
var pick = document.querySelector(".pick");
var title = document.querySelector(".title");
var available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numArray = [];
var computerPlayArr = [];
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const num = parseInt(e.currentTarget.id);

        if(clickAuthentication(num, numArray)){
            btn.textContent = "X";
            if(checkWins(numArray)){
                title.textContent = "You WIN!!!!";
            }
            setTimeout( function() { computerPlay(); }, 1000);
        }
    });

});
function checkWins(arr){
    
    let one = arr.indexOf(1);
    let two = arr.indexOf(2);
    let three = arr.indexOf(3);
    let four = arr.indexOf(4);
    let five = arr.indexOf(5);
    let six = arr.indexOf(6);
    let seven = arr.indexOf(7);
    let eight = arr.indexOf(8);
    let nine = arr.indexOf(9);
    if(arr.includes(1) && arr.includes(2) && arr.includes(3)){
        if(one > two > three || three > two > one || two > three > one || one > three > two || two > one > three || three > one > two){
            alert("yes");

            return true;
        }
    }
    if(arr.includes(4) && arr.includes(5) && arr.includes(6)){
        if(four > five > six || four > five > six || five > four > six || six > four > five || five > six > four || four > six > five){
            alert("yes");
            return true;
        }
    }

    if(arr.includes(7) && arr.includes(8) && arr.includes(9)){
        if(seven > eight > six || seven > eight > six || eight > seven > six || six > seven > eight || eight > six > seven || seven > six > eight){

            alert("yes");

            return true;
        }
    }
    if(arr.includes(1) && arr.includes(4) && arr.includes(7)){
        if(one > seven > seven || one > seven > seven || seven > one > seven || seven > one > seven || seven > seven > one || one > seven > seven){

            alert("yes");

            return true;
        }
    }
    if(arr.includes(2) && arr.includes(5) && arr.includes(8)){
        if(two > five > eight || two > eight > eight || eight > two > eight || eight > two > five || seven > seven > two || two > seven > seven){
            alert("yes");

            return true;
        }
    }
    if(arr.includes(3) && arr.includes(6) && arr.includes(9)){
        if(three > five > eight || three > eight > eight || eight > three > eight || eight > three > five || seven > seven > three || three > seven > seven){

        if(three > six > nine || nine > six > three){
            return true;
        }
    }
    if(arr.includes(1) && arr.includes(5) && arr.includes(9)){
        if(one > five > nine || nine > five > one || five > nine > one || five > one > nine || one > nine > five){
            alert("Oui");
            return true;
        }
    }
    if(arr.includes(3) && arr.includes(5) && arr.includes(7)){
        alert("yesgh");
        console.log(arr);
        if(three > five > seven || three > seven > seven || seven > three > seven || seven > three > five || seven > seven > three || three > seven > seven){
            alert("yesg");

            return true;
        }
    }

}
function computerPlay(){
    let max = Math.max.apply(null, available);
    let min = Math.min.apply(null, available);
    var compIndexPlay = Math.floor(Math.random() * (max - min) + min);
    if(available.includes(compIndexPlay)){
        var ID = compIndexPlay.toString();
        let Id = document.getElementById(ID);
        if(clickAuthentication(compIndexPlay, computerPlayArr)){
        Id.textContent = "O";
        if(checkWins(computerPlayArr)){
            title.textContent = "Computer wins";
        };
        }
    } 
    else{
        computerPlay()
    }
    
}


function clickAuthentication(value, arrToBePushed){
    if(available.includes(value)){

        var index = available.indexOf(value);
        available.splice(index, 1);
        arrToBePushed.push(value);
        return true;
    }
    console.log("***NO", value, available);
    return false;
}