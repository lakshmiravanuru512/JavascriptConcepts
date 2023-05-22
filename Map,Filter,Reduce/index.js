const array=[2,3,4,5,6,8];
const newArray=array.map(item=>item*2);
console.log(newArray);

const filteredArray=array.filter(item=>item%2===0);
console.log(filteredArray);

const reducedArray=array.reduce((acc,current)=>acc+current);
console.log(reducedArray);