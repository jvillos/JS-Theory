//from 100 to 125 1 by 1
for(let i= 100; i<=125; i++){
    console.log(i);
}

//from 0 to 24 even numbers
for(let i= 0; i<=24; i=i+2){
    console.log(i);
}

let person = {
    name: 'John', 
    age: 30, 
    city: 'New York'};
for (let key in person) {// for a single object
    console.log(key + ': ' + person[key]);
}

console.log(person.age);
console.log(person["age"]);


let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
    console.log(fruit);
}

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
];

users.forEach(function(element, index) {//more useful, you have the access to the index of the object
    console.log("N item: "+index);
    console.log("name: "+element.name);
});