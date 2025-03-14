var elementName = document.getElementById("elementName");
var classN = document.getElementById("class");
var idName = document.getElementById("idName");
var inputName = document.getElementById("name");
function counter(){
    var classCount = 0;
    var nameCount = 0;
    var idFound = false;
    var elementCount = document.querySelectorAll(elementName.value);
    // console.log(elementCount.length);
    for(var count = 0 ; count < elementCount.length ; count++){
        if(elementCount[count].className == classN.value){
            classCount++;
        }
        if(elementCount[count].id == idName.value){
            idFound = true;
        }
        if(elementCount[count].getAttribute(inputName.value) == inputName.value ){
            nameCount++;
        }
    }
    document.write("div= " + elementCount.length + " class = "+classCount + " id found = "+idFound + " name = "+ nameCount );
    // console.log(classCount);
    // console.log(idFound);
    // console.log(nameCount);
//     var newElement = document.createElement(elementName.value);
//     newElement.className = classN.value;
//     newElement.id = idName.value;
//     newElement.name = inputName.value;
//     newElement.setAttribute("name" , inputName.value)
//     document.body.appendChild(newElement);
//     // console.log(newElement);
//     var divCount = document.querySelectorAll(elementName.value);
//     var classCount = document.getElementsByClassName(newElement.className);
//     var flag = false;
//     var idFound = document.getElementById(newElement.id);
//     if(idFound){
//         flag = true;
//     }
//     console.log(divCount.length);
//     console.log(classCount.length);
//     console.log(idFound);
}
