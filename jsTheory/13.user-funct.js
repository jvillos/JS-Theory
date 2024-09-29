function sum(a,b){
    return a + b;
}

let a = 3;
let b = 5;

console.log(`${a} + ${b} = ${sum(a,b)}`)


//console.log(`${a} x ${b} = ${multiply(a,b)}`) //this one will not execute
const multiply = function(a,b){
    return a * b;
}

console.log(`${a} x ${b} = ${multiply(a,b)}`)




//arrow function
const division = (a,b) => {//we can simlify this further  because it's only one line of code
    return a/b;
}

//const division = (a,b) => a/b;