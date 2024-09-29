let number = "123"
console.log("Type of variable 'number is ' " +typeof number)

if(isNaN(number)){
    console.log(`${number} is not a number`);
    let sum = number + 4; //concatenation
}else{
    console.log(`${number} is a number`);
    
    let sum = Number(number) + 4;
    console.log(sum); //sum
}


