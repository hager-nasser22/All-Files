function areaCircule(raduis){
    return 2 * Math.PI * raduis;
}
function sqrNumber(number){
    return Math.sqrt(number);
}
function cosAngle(angle){
    return Math.cos(angle * Math.PI / 180);
}
var area = areaCircule(Number(prompt("Enter Raduis Of Circule")));
var sqrt = sqrNumber(Number(prompt("Enter Number")));
var cosin = cosAngle(Number(prompt("Enter Angle")));
document.write("Area = " + area + "</br> Square Number = " + sqrt + "</br> Cosin Angle = " + cosin);