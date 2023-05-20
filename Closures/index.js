function outerFunction(){
    const outerVariable="Hello, ";
    function innerFunction(name){
        return outerVariable+name;
    }
    return innerFunction;
}
const result=outerFunction();
console.log(result("Lakshmi"));