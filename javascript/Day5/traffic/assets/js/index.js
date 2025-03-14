
var count = 0;
var idelement;
var arrayColor =["red" , "rgb(241, 241, 34)" , "green"];
setInterval(function (){
    if(count == 3){
        count = 0;
    }
    idelement = document.getElementById("div"+count);
    idelement.style.backgroundColor =  arrayColor[count];
    document.getElementById("btn").style.color = arrayColor[count];
    if(count == 0){
        document.getElementById("div1").style.backgroundColor = "#918d8d";
        document.getElementById("div2").style.backgroundColor = "#918d8d";
        document.getElementById("btn").innerHTML = "Stop";
        
    }
    if(count == 1){
        document.getElementById("div0").style.backgroundColor = "#918d8d";
        document.getElementById("div2").style.backgroundColor = "#918d8d";
        document.getElementById("btn").innerHTML = "Steady";
    }
    if(count == 2){
        document.getElementById("div0").style.backgroundColor = "#918d8d";
        document.getElementById("div1").style.backgroundColor = "#918d8d";
        document.getElementById("btn").innerHTML = "Go";
    }
    count++;
},1000);

