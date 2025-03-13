 class Parent extends Exception{
    public Parent(String message){
        super(message);
    } 
}
 class Child {
    public void checkPositive(int num) throws Parent{
        if(num < 0){
            throw new Parent("Number Must be positive");
        }
    }
    public void checkComparison(int num) throws Parent{
        if(num > 3 || num <0){
            throw new Parent("Number Must at least one and at nost three");
        }
    }
    public void checkEmpty(String name) throws Parent{
        if(name.isEmpty()){
           throw new Parent("Name Is Required"); 
        }
    }
}
 class ExceptionHand{
    public static void main(String [] args){
        Child obj = new Child();
        int number = Integer.parseInt(args[0]);
        try{
            obj.checkPositive(number);
        }catch(Parent e){
            System.out.println(e.getMessage());
        }
        try{
            obj.checkComparison(number);
        }catch(Parent e){
            System.out.println(e.getMessage());
        }
        try{
            obj.checkEmpty(args[1]);
        }catch(Parent e){
            System.out.println(e.getMessage());
        }
    }
}