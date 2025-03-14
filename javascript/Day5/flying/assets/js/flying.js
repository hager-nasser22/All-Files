var count = 0;
function stopInt(){
    var myWindow = window.open("newwindow.html","_blank" , "width=50px,height=50px");
    setInterval(function (){
        myWindow.moveBy(count,count);
        count++;
    },1000)
}