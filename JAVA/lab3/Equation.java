import java.util.function.Function;
class Equation{
    public void EquationFunction (int a , int b , int c){
        double valueBottomSqrt = (b * b) - (4 * a * c);
        if(valueBottomSqrt == 0){
            System.out.println("Solve Equetion = " + (-b / (2*a)));
        }
        else if(valueBottomSqrt < 0){
            System.out.println("Solve Is not Real");
        }else{
            System.out.println((-b + Math.sqrt(valueBottomSqrt)) / (2*a));
            System.out.println((-b - Math.sqrt(valueBottomSqrt)) / (2*a));
        }
    }
    public static void main(String args[]){
        new Equation().EquationFunction(Integer.parseInt(args[0]) , Integer.parseInt(args[1]) , Integer.parseInt(args[2]));
    }
}