var numbers = [];
var sizeOfArray = Number(prompt("Enter Size Of Array"));
for (var count = 0 ; count < sizeOfArray ; count++){
    numbers[count] =Number(prompt("Enter Number : "));
    (numbers[count] < 0)?numbers[count] =Number(prompt("Please ,Enter Another Number : ")):"";
}
var newArray = [];
// for(var loop = 0 ; loop < sizeOfArray ; loop++){
//     newArray[loop] = Math.pow(numbers[loop] , 2);
// }
document.write(newArray + "</br>");
function square(numbers){
    for(var loop = 0 ; loop < sizeOfArray ; loop++){
        newArray[loop] = Math.pow(numbers[loop] , 2);
    }
    return newArray;
}
function processArray(numbersArray , operation){
    return operation(numbersArray);
}
var result = processArray(numbers , square);
document.write("square = " + result);