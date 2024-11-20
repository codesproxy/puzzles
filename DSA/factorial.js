

var num = 10;
var numfactorial = factorial (num);

console.log("factorial of "+num+" is: "+ numfactorial);

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
