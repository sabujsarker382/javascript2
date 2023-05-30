 const num=[12,33,44,2,11,33,4,2];
// const output=[];
// for(let i=0;i<num.length;i++){
//     const element=num[i];
//     const result=element*element;
//     output.push(result);
// }
// console.log(output);
//
// function square(element) {
//         return element*element;
// }
// num.map(function(element, index,array){
//     console.log(element ,index,array);
// });
// const result=num.map(function(element){
//     return element*element;
// })

// console.log(result);
//es5
const square=num.map(x=>x*x)
console.log(square);
