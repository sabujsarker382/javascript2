const normalPerson={
    firstName:"Sabuj",
    lastName:"sarker",
    getFullName:function(){
        console.log(this.firstName,this.lastName);
    }
}
console.log(normalPerson.firstName,normalPerson.lastName);