function calculateCartPrice(...num1) {   //... -> rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

// const user = {
//     username: "rahul",
//     price: 199
// }

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username : "Sam",
    Price : 399
})


const newArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));