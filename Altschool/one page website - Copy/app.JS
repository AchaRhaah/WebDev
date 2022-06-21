var operators = document.querySelectorAll(".operator");
var numbers = document.querySelectorAll(".number");
var punched = document.getElementById("history-value");
var operation = "";
var firstOperator = "+";
var moi = document.getElementsByClassName("keypad");
// console.log(moi.innerHTML)
function Operation(checkFunction) {
  if (checkFunction) {
    operators.forEach(function (operator) {
      operator.addEventListener("click", function () {});
      operation += operator.innerText;
    });
  }
}
function getNum() {
  numbers.forEach(function (num) {
    num.addEventListener("click", function () {
      if (operation.length <= 20) {
        operation += num.innerText;
        punched.innerText = operation;
      }
    });
  });
}

getNum();
Operation(checkOperator(operation));
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput(num) {
  document.getElementsByClassName("output").innerText = num;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
function checkOperator(string) {
  if (!string.includes("+") || !string.includes("-") || !string.includes("*")) {
    console.log("Y na");
    punched.innerText = string;
    console.log(string);
    return true;
  }
}
