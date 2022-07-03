var btns = document.querySelectorAll(".btn");
var pick = document.querySelector(".pick");
var title = document.querySelector(".title");
var available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var numArray = [];
var computerPlayArr = [];

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const num = parseInt(e.currentTarget.id);
        console.log(available, num,"me");

        if(clickAuthentication(num, numArray )){
            btn.textContent = "X";
            if(checkWins( numArray )){
                title.textContent = "You WIN!!!!";
            }
            setTimeout( function() { computerPlay(); }, 1000);
            // console.log(available+"me");
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

        if(one > two > three || three > two > one || three > two > one || one > two > three){
            return true;
        }
    }
    if(arr.includes(4) && arr.includes(5) && arr.includes(6)){
        if(four > five > six || six > five > four || five > six > four || four > six > five || five > four > six || six > four > five){
        if(four > five > six || six > five > four ){
            return true;
        }
    }
    if(arr.includes(7) && arr.includes(8) && arr.includes(9)){
        if(seven > eight > nine || nine > eight > seven || eight > nine > seven || seven > nine > eight || eight > seven > nine || nine > seven > eight){
        if(seven > eight > nine || nine > eight > seven){
            return true;
        }
    }
    if(arr.includes(1) && arr.includes(4) && arr.includes(7)){
        if(one > four > seven || seven > four > one || four > seven > one || one > seven > four || four > one > seven || seven > one > four){

        if(one > four > seven || seven > four > one){
            return true;
        }
    }
    if(arr.includes(2) && arr.includes(5) && arr.includes(8)){
        if(five > two > eight || eight > two > five || two > eight > five || five > eight > two || two > five > eight || eight > five > two){

        if(two > five > eight || eight > five > two){
            return true;
        }
    }
    if(arr.includes(3) && arr.includes(6) && arr.includes(9)){
        if(nine > six > three || three > six > nine || six > three > nine || nine > three > six || six > nine > three || three > nine > six){

        if(three > six > nine || nine > six > three){
            return true;
        }
    }
        if (arr.includes(1) && arr.includes(5) && arr.includes(9)) {
            if (one > five > nine || nine > five > one || five > nine > one || one > nine > five || five > one > nine || nine > one > five) {

                if (one > five > nine || nine > five > one) {
                    return true;
                }
            }
            if (arr.includes(3) && arr.includes(5) && arr.includes(7)) {
                console.log(arr);
                if (five > seven > three || three > seven > five || seven > three > five || five > three > seven || seven > five > three || three > five > seven) {

                    if (three > five > seven || seven > five > three) {
                        return true;
                    }
                }

            }
            function computerPlay() {
                let max = Math.max.apply(null, available);
                let min = Math.min.apply(null, available);
                var compIndexPlay = Math.floor(Math.random() * (max - min) + min);
                if (available.includes(compIndexPlay)) {
                    console.log(available, compIndexPlay, "computer");
                    var ID = compIndexPlay.toString();
                    let Id = document.getElementById(ID);
                    if (clickAuthentication(compIndexPlay, computerPlayArr)) {
                        Id.textContent = "O";
                        if (checkWins(computerPlayArr)) {
                            title.textContent = "Computer wins";
                        };
                    }
                }
                else {
                    computerPlay()
                }
    
            }


function clickAuthentication(value, arrToBePushed) {
    if (available.includes(value)) {

        var index = available.indexOf(value);
        available.splice(index, 1);

        arrToBePushed.push(value);
        return true;
    }
    console.log("***NO", value, available);
    return false;
}
