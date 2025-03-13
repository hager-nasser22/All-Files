import java.util.ArrayList;
import java.util.List;
abstract class MainShape{
    abstract void draw();
}
class Rect extends MainShape{
    @Override
    void draw(){
        System.out.println("Drow Rectangle");
    }
}
class Circle extends MainShape{
    @Override
    void draw(){
        System.out.println("Drow Circle");
    }
}
class Shape{
    public static void shapeLoop(List<? extends MainShape> shapes){
        for(MainShape shape:shapes){
            shape.draw();
        }
    }
    public static void main(String args[]){
        List <Rect> rectArray = new ArrayList<>();
        rectArray.add(new Rect());
        rectArray.add(new Rect());
        shapeLoop(rectArray);
        List <Circle> circleArray = new ArrayList<>();
        circleArray.add(new Circle());
        circleArray.add(new Circle());
        shapeLoop(circleArray);
    }
}