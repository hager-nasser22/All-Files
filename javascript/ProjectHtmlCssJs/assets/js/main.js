var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
function positionel(){
    var topp = header.getBoundingClientRect();
    if(topp.top < 1){
        navbar.style.position = "fixed";
        navbar.style.top = 0;
    }else{
        navbar.style.position= "relative";
        navbar.style.top = 0;
    }
    // console.log(topp.top);
}
window.addEventListener('scroll',positionel);
positionel();



// 696
// var content = document.querySelectorAll(".feature-product .feature-content > div");
// console.log(content);
// window.onscroll = function() {
//     // console.log(window.screenY);
//     if(window.scrollY > 670){
//         content[0].style.animation = "animat 1.5s .3s forwards";
//         content[1].style.animation = "animat 1.5s .9s forwards";
//         content[2].style.animation = "animat 1.5s 1.5s forwards";
//     }
// };

