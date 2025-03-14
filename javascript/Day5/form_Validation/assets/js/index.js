// var fullName = document.getElementById("fullName");
// var email = document.getElementById("email");
// var male = document.getElementById('male');
// var female = document.getElementById('female');
// var tennis = document.getElementById("tennis");
// var running = document.getElementById("running");
// var football = document.getElementById("football");
// var country = document.getElementById("country");
// var password = document.getElementById("password");
// var btnSubmit = document.getElementById("btnSubmit");
// var btnReset = document.getElementById("btnReset");
// var tennis = document.getElementById("tennis");
// var running = document.getElementById("running");
// var football = document.getElementById("football");
// var gender;
// var sport = [];
// errors = [];
// var count = 0 ;
// function login(eventListen){
//     eventListen.preventDefault();
//     // requiered([fullName , email , password]);
//     // checkLength([fullName , email , password]);
//     // resetAll([fullName , email , password]);
//     // if(male.checked == true){
//     //     gender = "Male";
//     // }
//     // else if(female.checked == true){
//     //     gender = "Female";
//     // }else{
//     //     errors[0] = "Gender is required";
//     // }
//     // if(tennis.checked == true){
//     //     sport[count++] = "tennis";
//     // }
//     // if(running.checked == true){
//     //     sport[count++] = "running";
//     // }
//     // if(football.checked == true){
//     //     sport[count++] = "football";
//     // }
//     // if(!tennis.checked && !running.checked && !football.checked){
//     //     errors[1] = "Sport Required";
//     //     document.write(errors[1]);
//     // }
//     // for(var loop = 0 ; loop < sport.length ; loop++){
//     //     document.write(sport[loop]);
//     // }
// }

// function requiered(element){
//     for(var count = 0 ; count < element.length ; count++){
//         element[count].style.border = (!element[count].value)? "6px solid red" : "";
//     }
// }
// function checkLength(element){
//     for(var count = 0 ; count < element.length ; count++){
//         element[count].style.border = (element[count].value.length < 3) ?  "6px solid red":"";
//     }
// }

// var resetAll = function (element){
//     for(var count = 0 ; count < element.length ; count++){
//         element[count].value = "";
//         element[count].textContent = "";
//         element[count].innerHtml = "";
//     }
// }