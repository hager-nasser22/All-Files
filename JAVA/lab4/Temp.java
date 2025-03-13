import java.util.function.Function;
public class Temp {
    public static void main(String args[]){
    Function<Float,Float> tempR = new  Function<Float,Float>(){
    @Override

        public Float apply(Float temp){
            return 32+(temp * 9/5);
        }
    };
        float tempValue = Float.parseFloat(args[0]);
        System.out.println("Temp is = " + tempValue + "°C or "+ tempR.apply(tempValue) + "°F");
    }
}