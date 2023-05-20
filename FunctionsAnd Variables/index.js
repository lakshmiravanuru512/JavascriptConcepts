a();
b();
console.log(x);

var x=1;
function a(){
    var x=20;
    console.log(x);
}
function b(){
    var x=100;
    c();
    function c(){
        console.log(x);
    }
}
