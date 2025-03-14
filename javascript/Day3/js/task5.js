var numbers = [];
function add(numbersOne , numbersTwo){
    document.write("Result Of Adding =" + (numbersOne + numbersTwo ) + "</br>");
}
function subtract(numbersOne , numbersTwo){
    document.write("Result Of Subtract = " + (numbersOne - numbersTwo  ) + "</br>");
}
function multiply(numbersOne , numbersTwo){
    document.write("Result Of  Multiply = " + numbersOne * numbersTwo   + "</br>");
}
function divided(numbersOne , numbersTwo){
    document.write("Result Of divided  = " + numbersOne / numbersTwo   + "</br>");
}
var numbersOne =Number(prompt("Enter Number one : "));
do{
    var numbersTwo =Number(prompt("Enter Number one : "));
}while(numbersTwo == 0);
function applyOperation(number1 , number2 , operation){
    operation(number1 , number2 );
}
applyOperation(numbersOne,numbersTwo,add);
applyOperation(numbersOne,numbersTwo,subtract);
applyOperation(numbersOne,numbersTwo,multiply);
applyOperation(numbersOne,numbersTwo,divided);