members = [];
total_members = 10;

init ();
start();

function init(){
    for (let i=1;i<=total_members; i++){
        members.push(i);
    }
    
    console.log("start: ", members) ;
}

function start(){
    var cutpoint;
    console.log(members.length, total_members)
    if (members.length == total_members){
        cutpoint = 0;
        beheader = members[cutpoint]; // get value of the guy
        beheaderIndx = members.indexOf(beheader); // get position of the guy
        
        console.log("beheader: ", beheader, "index: ", beheaderIndx);

        beheaded = members[cutpoint+1]; // get value of the guy
        beheadedIndx = members.indexOf(beheaded); // get position of the guy
        console.log("beheaded:", beheaded, "index:", beheadedIndx) ;

        //cut the guy
        members.splice (beheadedIndx, 1); //kill the guy

        nextbeheaderIndx = members.indexOf(beheader+1); // get value of the guy
        nextbeheader = members.indexOf(nextbeheaderIndx) ;
        console.log("next beheader: ", nextbeheader, "index: ", nextbeheaderIndx) ;


    }
}