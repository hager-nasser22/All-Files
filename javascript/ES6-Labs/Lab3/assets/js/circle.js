import Shape from "./shape.js";
class Circle extends Shape{
    constructor(raduis){
        super();
        this.raduis = raduis;
    }
    area(){
        return Math.PI * this.raduis * this.raduis;
    }
    parameter(){
        return 2 * Math.PI * this.raduis;
    }
}
var obj = new Circle(7);
console.log(obj.area());
console.log(obj.parameter());