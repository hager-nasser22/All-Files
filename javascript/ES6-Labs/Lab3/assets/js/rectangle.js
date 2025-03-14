import Shape from "./shape.js";
class Rectangle extends Shape{
    constructor(height,width){
        super();
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
    parameter(){
        return (this.height + this.width)* 2; 
    }
}
var obj = new Rectangle(4,3);
console.log(obj.area());
console.log(obj.parameter());