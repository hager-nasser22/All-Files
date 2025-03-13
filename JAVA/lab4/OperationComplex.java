interface Complex<T extends Number>{
    T getReal();
    T getImagine();
    Complex<T> add(Complex<T> obj);
    Complex<T> subtract(Complex<T> obj);
    Complex<T> product(Complex<T> obj);
    Complex<T> div(Complex<T> obj);
}
class OperationComplex implements Complex<Double>{
    double real;
    double imagine;
    public OperationComplex(double real , double imagine){
        this.real = real;
        this.imagine = imagine;
    }
    @Override
    public Double getReal(){
        return real;
    }
    @Override
    public Double getImagine(){
        return imagine;
    }
    @Override
    public Complex<Double> add(Complex<Double> objTwo){
        return new OperationComplex(objTwo.getReal() + this.real , objTwo.getImagine() + this.imagine);
    }
    @Override
    public Complex<Double> subtract(Complex<Double> objTwo){
        return new OperationComplex(objTwo.getReal() - this.real , objTwo.getImagine() - this.imagine);
    }
    @Override
    public Complex<Double> product(Complex<Double> objTwo){
        return new OperationComplex(objTwo.getReal() * this.real - objTwo.getImagine() * this.imagine , objTwo.getReal() * this.imagine + objTwo.getImagine()* this.real);
    }
    @Override
    public Complex<Double> div(Complex<Double> objTwo){
                return new OperationComplex((objTwo.getReal() * this.real - objTwo.getImagine() * this.imagine) / (Math.pow(objTwo.getReal(),2) + Math.pow(objTwo.getImagine(),2)), (objTwo.getReal() * this.imagine + objTwo.getImagine()* this.real) / (Math.pow(objTwo.getReal(),2) + Math.pow(objTwo.getImagine(),2)));
    }
    @Override
    public String toString(){
        return String.format("%f + (%fi)" , real , imagine);
    }
    public static void main(String []args){
        double realn1 = Double.parseDouble(args[0]);
        double imgn1 = Double.parseDouble(args[1]);
        double realn2 = Double.parseDouble(args[2]);
        double imgn2 = Double.parseDouble(args[3]);
        OperationComplex complex1 = new OperationComplex(realn1,imgn1);
        OperationComplex complex2 = new OperationComplex(realn2,imgn2);
        System.out.println("add= " + complex1.add(complex2));
        System.out.println("sub= " + complex1.subtract(complex2));
        System.out.println("product = " + complex1.product(complex2));
        System.out.println("div= " + complex1.div(complex2));
    }
}