const score = 400;  //way to define an number
console.log(score);

const balance = new Number(100); //another way to define a number

console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//********************MATHS*********************//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.min(4,9,3,4));
console.log(Math.max(4.9,3,4));

console.log(Math.random());  //0  to 1 mostlty decimal

console.log((Math.random()*10) + 1); //adding 1 to get minimum 1 as a value

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min);
