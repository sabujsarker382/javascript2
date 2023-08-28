class person{
    constructor(firstName,lastName,Salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.Salary=Salary;
    }
}
const heroPerson=new person("hero","balam",27000);
console.log(heroPerson.salary);