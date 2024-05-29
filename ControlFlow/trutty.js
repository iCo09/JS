//True value or False value

const userEmail = "h@hitesh.ai"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have email");
}

//False value -> false,0,-0, BigInt 0n, "", null, undefinrd, NaN
//True value -> true,1, "0", 'false', " ", [], {}, function(){}

//Nullish Coalescing operator (??): null unfefinrd

let val1;
val1 = null ?? 10
console.log(val1);


//Ternary Operator -> if else statement
//condition?True:false
const ice = 100
ice > 80 ? console.log("greater than 80") : console.log("less than 80");;