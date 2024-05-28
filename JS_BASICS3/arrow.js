const user = {
    username : "Rahul",
    price : 199,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "rahul"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "rahul"
//     console.log(this.username);
// }

//Arrow function 

const chai = () => {
    let username = "Rahul"
    console.log(this);
}

//chai()

const addtwo = (num1, num2) => (num1 + num2)
console.log(addtwo(3,4));