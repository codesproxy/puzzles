n = process.argv[2] ? process.argv[2] : 10;
console.log("creating a pyramid for "+n+" rows: ");
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