public class SplitThreeSecond{
    public static void main(String args[]){
        String message = args[0];
        String splitedWord = args[1];
        int index = 0;
        int count = 0;
        while((index=message.indexOf(splitedWord,index)) != -1){
            count++;
            index += splitedWord.length(); 
        }
        System.out.println("word count = "+count);
    }
}