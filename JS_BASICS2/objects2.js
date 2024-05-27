//singleton

//const tinderUser = new Object() //singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Hitesh",
            lastName : "Choudhary"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //to get all the keys

console.log(Object.values(tinderUser));
