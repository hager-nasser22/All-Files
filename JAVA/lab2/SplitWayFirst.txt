public class Splited{
	String valueString ;
	public Splited(String valueString){
		this.valueString = valueString;
	}
	int [] splitValue(){
		String [] arrayString =  this.valueString.split("\\.");
		int [] arrayNumber = new int [arrayString.length];
		for(int count = 0 ; count < arrayString.length ; count++){
			arrayNumber[count] = Integer.parseInt(arrayString[count]);
		}
		return arrayNumber;
	}
	public static void main(String args[]){
		Splited instance = new Splited(args[0]);
		int [] updatedArray = instance.splitValue();
		for(int loop = 0 ; loop < updatedArray.length ; loop++){
			System.out.println(updatedArray[loop]);
		}
	}	
}