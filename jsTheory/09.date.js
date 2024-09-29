let now = new Date(); //it gives current date

//console.log(now);
//console.log(now.toLocaleString());


let endCurse = new Date(2025,2,20);
//console.log(`The curse ends at: ${endCurse.toLocaleString()}`);

if(now>=endCurse){
    console.log("THe curse is over");
}else{
    //calculate the remaining days
    let rawDiff = endCurse-now; //result in miliseconds
    let diff=rawDiff/(1000*60*60*24)
    console.log(`The course ends in ${Math.round(diff)} days`);
}