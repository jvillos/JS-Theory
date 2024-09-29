// 11 // 3 =3
let n1 = 11;
let n2 = 3;

let intDiv = (n1 - (n1 % n2)) / n2;

//with template literal. BETTER THAN THE OTHER
console.log(`With regular expression: ${n1} / ${n2} = ${intDiv}`);

//without a template literal
// console.log(n1 + " / " + n2 + " = " + intDiv);

let intDiv2 = Math.floor(n1 / n2);
console.log(`With Math.floor: ${n1} / ${n2} = ${intDiv2}`);