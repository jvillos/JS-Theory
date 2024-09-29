let firstName= "Juan"
let lastName= "Villoslada"
/*console.log(`${firstName} ${lastName} with template literals`);
console.log(firstName + " " + lastName + " with the + operator");
*/
let fullName = `${firstName} ${lastName}`;

let toUpperCase = fullName.toUpperCase();

let toLowerCase = fullName.toLowerCase();


let substring = fullName.substring(0,5);

let split = fullName.split(" ");

let nameAddress = `${fullName}
C/Intituto 25`


let commaSep = "one,two, three,four , five";

let arrayCommSep = commaSep.split(",");
//let arrayCommSep = commaSep.split(/[ ,]+/); //with regular expression. more powerful but more advanced. a bunch or commas and/or spaces is the splitter


let num = "123.3453";

let isNumber = isNaN(num);

let toString = num.toString();

//let toFixed = (Number.num).toFixed(2);


console.log(toFixed);
