///////////////////task1/////////////////
var x = 2;
var y = 5;
var [y,x] = [x,y];
document.write(`<h1>x= ${x} and y = ${y}</h1>`);
//////////////////task2////////////////////
var max,min;
function minAndMax(...arrNumbers){
    // console.log(arrNumbers);
    // arrNumbers.reduce((previous,current,index,arr)=>(previous > current) ? max=previous : max= current);
    // arrNumbers.reduce((previous,current,index,arr)=>(previous > current) ? min=current : min= previous);
    // return `Max = ${max} and Min = ${min} `;
    return `max = ${Math.max(...arrNumbers)} and min = ${Math.min(...arrNumbers)}`;
}
document.write(`<h3>${minAndMax(70,40,90,10)}</h3>`);
/////////////////task3/////////////////////
var fruits = ["apple","strawberry","banana","orange","mango"];
document.write("<h1>Is Values String?"+fruits.every((value)=> (isNaN(parseInt(value))))+"</h1>");
document.write("<h1>Is Values Start With a?"+fruits.some((value)=> (value.startsWith("a")))+"</h1>");
document.write("<h1>New Array Starts With b and s = [ " + fruits.filter((value)=>value.startsWith("b") || value.startsWith("s"))+"]</h1>");
let newArr = fruits.map((value)=>`I Like ${value}`);
newArr.forEach((value)=>document.write(`<h4>${value}</h4>`));
/////////////////task4////////////////////
var numbers = [2,-1,5,-3,9,21];
var positive = numbers.filter((element)=>(element > 0)? element : "");
document.write(`<h3>Positive = ${positive}</h3>`);
///////////////task5//////////////
var sum = numbers.reduce((previous,current,index,arr)=>previous+current);
document.write(`<h3>Sum = ${sum}</h3>`);
///////////////task6////////////////////
var names = ["hager","salwa" , "hanaa","sara","mennah","Mohamed"]; 
var capitalizNames = names.map((element)=>" "+element.charAt(0).toUpperCase()+element.slice(1)+" ");
document.write(`<h3>Capitalize Names = ${capitalizNames}</h3>`);
//////////////////task7////////////////////////
var nameString = "hager";
var check = nameString.split("").every((value) => value !== value.toUpperCase());
document.write(`<h3>Check = ${check}</h3>`);
////////////////////task8//////////////////////
var newValues = (length,arr)=> arr.filter((element)=>element.length > length);
document.write(`<h3> Names Length Greater Than 5 is  ${newValues(5,names)}</h3>`);