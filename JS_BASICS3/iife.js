//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()


//IIFE function -> global scope ke pollution se bchne k liye
(function chai(){
    //named iife
    console.log(`DB Connected`);
})();

((name) => {
console.log(`DB Connected Two ${name}`);
})('rahul')


