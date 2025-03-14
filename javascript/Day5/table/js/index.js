var rowData = document.getElementById("rowData");
var studentName = document.getElementById("studentName");
var studentAge = document.getElementById("studentAge");
var btn = document.getElementById("btn");
var allTr = document.getElementsByTagName("tr");
var login = function (e){
    var createTr = document.createElement("tr");
    var createTd = document.createElement("td");
    e.preventDefault();
    var trCreated = rowData.appendChild(createTr);
    trCreated.innerHTML = "<td>" + studentName.value + "</td>";
    trCreated.innerHTML += "<td>" + studentAge.value + "</td>";
    trCreated.innerHTML += "<td>" + studentAge.value + "</td>";        
}
btn.addEventListener('click' , login);