var arrayNumbers = [];
var sizeOfArray = Number(prompt("Enter Size Of Array"));
for(var count = 0 ; count < sizeOfArray ; count++){
    arrayNumbers[count] =  Number(prompt("Enter Numbers"));
}
arrayNumbers.sort(function (a,b){return a-b});
document.write("before = " + arrayNumbers +"</br>");

for(var loop = 0; loop < arrayNumbers.length-1 ; loop++){
    if(arrayNumbers[loop] === arrayNumbers[loop+1]){
        arrayNumbers.splice(loop+1 , 1);
        loop--;
    }
}
document.write("first" + arrayNumbers[1] + " last" + arrayNumbers[arrayNumbers.length-2]);

