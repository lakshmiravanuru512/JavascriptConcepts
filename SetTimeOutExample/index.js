// var i=1;
// for(let i=0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// };


for(var i=0;i<=5;i++){
    function number(i){
        setTimeout(()=>{
            console.log(i)
        },i*1000);
    }
    number(i);
};