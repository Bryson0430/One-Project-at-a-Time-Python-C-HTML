public class people {
    public static void main(String[] args)  {
        person p1 = new person("John", 50, 3000, 100000);
        person p2 = new person("Bob", 40, 20000, 400);
        System.out.println(p1.salary + " and " + p2.salary + " are the old salaries of " + p1.name + " and " + p2.name);
        p1.raiseSalary();
        p2.raiseSalary();
        System.out.println(p1.salary + " and " + p2.salary + " are the new salaries of " + p1.name + " and " + p2.name);
    }
}
class person {
    String name;
    int age;
    int salary;
    double money;
    
    person(String name, int age, int salary, int money) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.money = money;
    }

public void raiseSalary() {
                this.salary += (this.age - 18) * 1000;
           } 
public void checkdebt() {
    Boolean debt = this.money < 0;
    if (debt) {
        System.out.println("YOU ARE IN DEBT!");
        System.out.println("you spend time paying it back");
        double debtfa = this.money * 1000;
        if (debtfa < 1) {
            debtfa = 1;
        }
        age += debtfa; }
}
    }