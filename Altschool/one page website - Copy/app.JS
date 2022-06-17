function getHistory(){
    return document.getElementById("history-value").innerText;
}
alert(get)
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(num){
    document.getElementsByClassName("output").innerText = num;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }
    else{
    document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operators = document.querySelectorAll("operator");
operators.forEach(function(operator){
    operator.addEventListener('click', function(){
       alert("the button clicked!");
    });
});