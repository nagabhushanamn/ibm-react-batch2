
class Person{
    String pName="Nag";
    public void sayName(){
        String pName="Local";
        System.out.println("im "+pName);
        System.out.println("im "+this.pName);
    }
}

public class Java_Demo{
    public static void main(String args[]){

        Person p=new Person();
        p.sayName();

    }
} 