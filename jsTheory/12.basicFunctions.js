// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Call
let message = greet('Alice');
console.log(message); // Output: Hello, Alice!

/*
let num = parseInt("10", 10); // 10
let num = parseFloat("10.5"); // 10.5
let result = isNaN("hello"); // true
let result = isFinite(10); // true
let result2 = isFinite(Infinity); // false
let result = eval("2 + 2"); // 4


let uri = "https://www.example.com?name=John Doe";
let encodedURI = encodeURI(uri); // "https://www.example.com?name=John%20Doe"
let uriComponent = "John Doe & Co";
let encodedURIComponent = encodeURIComponent(uriComponent); // "John%20Doe%20%26%20Co"
let encodedURIComponent = "John%20Doe%20%26%20Co";
let decodedURIComponent = decodeURIComponent(encodedURIComponent); // "John Doe & Co"
*/

setTimeout(function () {
    console.log("Hello after 2 seconds");
  }, 10000);



  setInterval(function () {
    //in this case the parameter is another function
    console.log("Hello every 2 seconds");
  }, 2000);

  function callback(){
    console.log("hello");
  }

  setInterval(callback,3000);

  const callback = () => {
    console.log("hello");
  }