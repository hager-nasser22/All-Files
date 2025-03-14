// document.write("<h1>All Users</h1>");
// async function allProducts(){
//     let stepOne = fetch("https://jsonplaceholder.typicode.com/users");
//     let stepTwo = await stepOne;
//     let data =  await stepTwo.json();
//     return data;
    
// }
// allProducts().then((data)=>{
//     data.forEach((value)=>{
//         document.write(`<button id="${value.id}" onclick="fun(${value.id})">${value.name}</button>`);
//     });
// }).catch(()=>{
//     console.log("error");
// });
// async function fun(id){
//     let stepOne = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
//     let stepTwo = await stepOne;
//     let data =  await stepTwo.json();
//     // data.forEach((value)=>{
//     //     console.log(value.body);
//     // })
//     return data;
// }

var body = document.getElementById("body");
var content = document.getElementById("content");
var div = document.createElement("div");
document.write("<h1>All Users</h1>");
body.appendChild(div);
async function allProducts(){
    try{
        let stepOne = fetch("https://jsonplaceholder.typicode.com/users");
        let stepTwo = await stepOne;
        let data =  await stepTwo.json();
        data.forEach((value)=>{
            var btn = document.createElement("button");
            btn.innerHTML = `${value.name}`;
            btn.id=`${value.id}`;
            btn.onclick=()=>fun(value.id);
            content.appendChild(btn);
        });
    }catch(e){
        console.log("error");
    }
}
async function fun(id){
    try{
        
        let stepOne = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        let stepTwo = await stepOne;
        let data =  await stepTwo.json();
        div.innerHTML="";
        data.forEach((value)=>{
            var p = document.createElement("p");
            p.textContent = `${value.body}`;
            div.appendChild(p);
        });
    }catch(e){
        console.log("error detail");
    }
}
allProducts();