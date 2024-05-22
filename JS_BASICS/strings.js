const name = "rahul";
const repCount = 22;
console.log(`Hello, My name is ${name}. My RepCount is ${repCount}`);

const string1 = name.substring(0,3);
console.log(string1);

const string2 = name.slice(-5,4);
console.log(string2);

const string3 = "   rahul   ";
console.log(string3);
console.log(string3.trim());


const url = "https://rahul%20bisht";
console.log(url.replace('%20', '-'));