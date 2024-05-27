//arrays

const myArr = [0,1,2,3,4,5]
//console.log(myArr[1]);

const myHeroes = ["shaktiman", "naagraj"]

const myarr2 =  new Array(1,2,3,4)

//Array Methods

myArr.push(6)  //push method
myArr.push(7)
myArr.pop() //pop method
console.log(myArr);

myArr.unshift(9) //to add a value at the starting
myArr.shift //to delete starting value

console.log(myArr.includes(9));

const newArr1 = myArr.join()
console.log(myArr);
console.log(newArr1); //to string


const myArr3 = [0,1,2,4,4,5]
const myn1 = myArr3.slice(1,3)

console.log(myn1);
console.log(myArr3);

const myn2 = myArr3.splice(1,3)
console.log(myn2);
console.log(myArr3);





