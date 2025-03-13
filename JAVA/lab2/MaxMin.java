public class MaxMin{
    public int max(int [] arrayNumbers){
        int max = arrayNumbers[0];
        for(int count = 0 ; count < arrayNumbers.length ; count++){
            if(arrayNumbers[count] > max){
                max = arrayNumbers[count];
            }
        }
        return max;
    }
    public int min(int [] arrayNumbers){
        int min = arrayNumbers[0];
        for(int count = 0 ; count < arrayNumbers.length ; count++){
            if(arrayNumbers[count] < min){
                min = arrayNumbers[count];
            }
        }
        return min;
    }
    public static void main(String args[]){
        String [] arrayS =args[0].split("\\,");
        int [] arrayN = new int [arrayS.length];
        for(int loop = 0 ; loop < arrayS.length ; loop++){
            arrayN[loop] = Integer.parseInt(arrayS[loop]);
        }
        MaxMin instance = new MaxMin();
        long timeMaxS = System.nanoTime();
        int maxV = instance.max(arrayN);
        long timeMaxE = System.nanoTime();
        long timeMinS = System.nanoTime();
        int minV = instance.min(arrayN);
        long timeMinE = System.nanoTime();
        System.out.println("max = "+maxV);
        System.out.println("max time = "+(timeMaxE-timeMaxS));
        System.out.println("min = "+minV);
        System.out.println("min time = "+(timeMinE-timeMinS));
    }
}