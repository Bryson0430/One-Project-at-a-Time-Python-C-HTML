public class App {
    public static void main(String[] args)  {
        person p1 = new person("john", 20, 3000);
        p1.raiseSalary();
        System.out.println(p1.salary);  
    }
}
class person {
    String name;
    int age;
    int salary;
    person(String name, int age, int salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
           public void raiseSalary() {
                this.salary *= (this.age - 18) / 10 + (this.salary * 0.1);
           } 
    }