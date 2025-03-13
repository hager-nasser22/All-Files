import java.util.StringTokenizer;
public class SplitedSecond{
	String valueString ;
	public SplitedSecond(String valueString){
		this.valueString = valueString;
	}
	int [] splitValue(){
		StringTokenizer arrayString = new StringTokenizer(this.valueString,".");
        int arrayLength = arrayString.countTokens();
		int [] arrayNumber = new int [arrayLength];
		for(int count = 0 ; count < arrayLength ; count++){
			arrayNumber[count] = Integer.parseInt(arrayString.nextToken());
		}
		return arrayNumber;
	}
	public static void main(String args[]){
		SplitedSecond instance = new SplitedSecond(args[0]);
		int [] updatedArray = instance.splitValue();
		for(int loop = 0 ; loop < updatedArray.length ; loop++){
			System.out.println(updatedArray[loop]);
		}
	}	
}