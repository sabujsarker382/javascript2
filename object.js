const student=[
    {id:21,name:'sabuj'},
    {id:50,name:'lanu'}
];

const output=student.map(x=>x.name);
const ids=student.map(x=>x.id);
console.log(output);

console.log(ids);
const idws=student.filter(x=>x.id<45);
console.log(idws);
const ids1=student.find(x=>x.id>40);
console.log(ids1);