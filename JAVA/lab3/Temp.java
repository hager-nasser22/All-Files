import java.util.function.Function;
public class Temp implements Function<Float,Float>{
    @Override
    public Float apply(Float temp){
        return 32+(temp * 9/5);
    }
    public static void main(String args[]){
        float tempValue = Integer.parseInt(args[0]);
        System.out.println("Temp is = " + tempValue + "°C or "+ new Temp().apply(tempValue) + "°F");
    }
}