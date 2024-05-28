//function
function sayMyName(){

    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

//sayMyName()

function addTwoNumbers(number1, number2){  //parameters
    //console.log(number1 + number2);
    return number1+number2
}

const result = addTwoNumbers(3,5);  //arguments
//console.log("Result :", result);



function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log(`Please enter username`);
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
