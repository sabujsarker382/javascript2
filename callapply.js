const normalPerson={
    firstName:"Sabuj",
    lastName:"sarker",
    salary:15000,
    getFullName:function(){
        console.log(this.firstName,this.lastName,this.salary);
       
    },
    chargeBill:function(amount,tips,tax){
       
        this.salary=this.salary-amount-tips-tax;
        console.log(this);
        return this.salary;
    },
   
}
const heroPerson={
    firstName:"tomy",
    lastName:"islam",
    salary:25000
}
// //normalPerson.chargeBill();
// const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);
normalPerson.chargeBill.call(heroPerson,5000,2000,1000);
console.log(heroPerson.salary);