var arrayNames = ["ahmed" , "islam" , "sandra" , "fatma" , "ali"];
function randomNumber(){
    var firstRandomNumber = Math.floor(Math.random()*arrayNames.length);
    do{
        var secondRandomNumber = Math.floor(Math.random()*arrayNames.length);
    }while(secondRandomNumber == firstRandomNumber);
    return [arrayNames[firstRandomNumber] , arrayNames[secondRandomNumber]];
}

console.log(randomNumber());
