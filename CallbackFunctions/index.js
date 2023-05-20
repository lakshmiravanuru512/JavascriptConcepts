setTimeout(function(){
console.log("Callback Function")
},5000);
function x(y){
    console.log("x");
    y();
}
x(function y(){
 console.log("y");
});

