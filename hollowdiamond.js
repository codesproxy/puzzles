n = process.argv[2] ? process.argv[2] : 10;
console.log("creating a diamond for "+n+" rows: ");
 
for(let i=1; i<=n; i++){
    lineString = "";
    if(i <n) {
        drawline(i);
    } 
    else if(i == n){
        drawline(i);
        for(let j=i-1; j>=1; j--){
            drawline(j);
        }
    }
    
}
//console.log (i, j, k);

function drawline(linenumber){
    lineString = "";
    totalchars  = (2 * n) - 1;
    midstart = n-linenumber;
    midend = totalchars - midstart -1;

    for(let k=0; k<totalchars; k++){
        if(linenumber == 1){
            midend = midstart;
        }
        lineString += (k==midend || k == midstart) ? " * ": "   ";
        
    }
    console.log(lineString);


    // for(k=0; k<totalchars; k++){
    //     if(linenumber == 1){
    //         midend = midstart;
    //     }
    //     lineString += (k<=midend && k >= midstart) ? " * ": "   ";
        
        
    // }
    //console.log(lineString);

}



/*
totalchars = (2 * n) - 1;


for(i=0; i<n; i++)
{
    lineString = "";
    dashcounts = (n-1) * 2;
    wordcount = (2*i) + 1;
    midstart = n-i-1;
    midend = midstart + wordcount -1;
    
    for(j=0; j<totalchars; j++)
        lineString += (j<midstart || j> (midend) )?  " " : "*";

    console.log (lineString)
}
    */