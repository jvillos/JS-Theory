//random number between 0 and 200

for(let i=0;i<=9;i++){
    let rand = Math.round((Math.random()*200));
    console.log(rand);
}


//random number between 50 and 60
let min=50;
let max=60

for(let i=0;i<=9;i++){
    let randRange = Math.round((min+Math.random()*(max-min)));
    console.log(`Range rand: ${randRange}`);
}


//calculate the area of a circle

let radius = 3;

let area = (radius**2)*Math.PI;

console.log(`Area of a circle of radius ${radius}: ${area.toFixed(4)}`);