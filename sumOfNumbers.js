//Goal - 145 should return 1+4+5 = 10

n = process.argv[2] ? process.argv[2] : 10;


/*
    
    // with typecasting in JS:

    n_str = n.toString();
    n_str_len = n_str.length;
    output = 0;
    for (i=0;i<n_str_len;i++){
        n_int = parseInt(n_str.charAt(i));
        output += n_int;
        
    }
    console.log("Total of digits in "+n+" is : "+output);
*/

//without typecasting

output = 0;
divideandconquor(n);
console.log("Total of digits in "+n+" is : "+output);

function divideandconquor(n){
    if(n>=10){
        div_no  = Math.floor(n / 10);
        remainder_no  = n % 10;
        output += remainder_no;
        if(div_no>=10){
            divideandconquor(div_no)
        }else{
            output += div_no;
        }
    }
    else{
        return n;
    }
    
    
}
