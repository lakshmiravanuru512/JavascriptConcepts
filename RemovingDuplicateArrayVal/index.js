// const a=[2,3,4,5,6,2,3,4,9];
// const b=[...new Set(a)];
// const c=[];
// b.map((value)=>{
// let count=0;
// for(let i=0;i<a.length;i++){
//     if(value===a[i]){
//         count=count+1;
//     }
// }
// c.push({value:count});
// });
// console.log(c);

const a=[2,3,4,5,6,2,3,4,9];
const b=[...new Set(a)];
const c=[];
b.map((value)=>{
    count=0;
let subArray=[];
for(let i=0;i<a.length;i++){
    if(value===a[i]){
        count=count+1;
        subArray.push(a[i]);
    }
}
c.push(subArray);
});
console.log(c);