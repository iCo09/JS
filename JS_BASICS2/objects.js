//singleton
//object literals

// Object.create //singleton


const mySym = Symbol("key1")

const JsUser = {
    name : "Rahul",
    "full name" : "Rahul Bisht",
    [mySym] : "mykey1",
    age : 22,
    location : "HP",
    email : "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "rahul@walmart.com"
//Object.freeze(JsUser) //to freeze for no changes to be made
JsUser.email = "rahul@flipkart.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());