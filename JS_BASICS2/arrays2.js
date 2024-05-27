const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const all_new = [...marvel_heroes, ...dc_heroes]
console.log(all_new);


const another_arr = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"));
console.log(Array.from({name:"Rahul"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));