

var unsortedArray = [3,1,7,2,9,0,5,8,4,6];
var numberToFind = 7;

for (i=0;i<= unsortedArray.length - 1; i++){
    element = unsortedArray[i];
    console.log("Element on index "+i+" is: "+unsortedArray[i]);
    if(element == numberToFind){
        console.log("Element "+numberToFind+" found ");
        break;
    }
   
}
