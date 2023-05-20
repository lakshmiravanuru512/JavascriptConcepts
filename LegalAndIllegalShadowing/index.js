//Legal Scope

var x=10;
{   
    var x=1           
    let a=100;       
    const b=20
    console.log(x);
    console.log(a);
    console.log(b);
}
console.log(x);      //The value of x is replaced with 10 in the global scope.

//Illegal Scope

let x=10;
{
    var x=100;
    console.log(x);
}
console.log(x);    //syntax Error "x" is already declared 