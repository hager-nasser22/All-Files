const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
color.addEventListener("change" , function (){
    context.strokeStyle = color.value;
    const x = Math.random() * (canvas.width - 40) + 20;
    const y = Math.random() * (canvas.height - 40) + 20;
    context.beginPath();
    context.arc(x,y,20,0,Math.PI * 2,true);
    context.stroke();
    
})


