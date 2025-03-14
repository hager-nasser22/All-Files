import Shape from "./shape.js";
class Square extends Shape{
    constructor(param){
        super();
        this.param = param;
    }
    area(){
        return this.param * this.param;
    }
    parameter(){
        return this.param * 4;
    }
}
var obj = new Square(4);
console.log(obj.area());
console.log(obj.parameter());