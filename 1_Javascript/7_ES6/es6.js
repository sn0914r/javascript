// block scope with let & const

let num = 10; // we declared num globally
{
    let num = 20; // we declared num in a block
    console.log(num); // lohgs 20 because this `num` is scoped to the block
}
console.log(num); // logs 10 because we are referring to the `num` from the global scope

// arrow functions

function traditionalFn(){
    console.log("Iam a tradiotinal funtion")
}
traditionalFn();

let arrowFn=()=> console.log("Iam an arrow function")
arrowFn()

// template literals
let greet=name=>console.log(`hello, ${name || "user"}`);
greet("bhAAi");
greet()

// destructuring
let object = {
    venu : "tiGor",
    sundeep: "bhAAi"
}
let { venu, sundeep } = object;
console.log(venu, sundeep)

// default parameters
greet=(name="user")=>console.log(`hello, ${name}`);
greet("tiGor");
greet()

// Rest & Spead Operators
// rest
const sum=(...nums)=>nums.reduce((a,b)=>a+b, 0)
console.log(
    sum(2, 4, 6, 8, 10)
)
//spread
function mergeArray(arr1, arr2){
    console.log([...arr1, ...arr2]) // arr1 &arr2 are spreaded into a new array
}
mergeArray(
    [1, 2, 3, 4, 5],
    [6,7, 8, 9]
)

// Map & set
// Map
const map = new Map()
//adding 
map.set("venu", "bhAAi")
map.set(["venu", "sundeep"], "snakes")
map.set(true, 1)

console.log(map)

// deleting
let isDeleted = map.delete(true);
console.log(map)

// checking if  key exits
let isKey = map.has("venu")
console.log(`isKey: ${isKey}`)

// accessing value of specific key
let value = map.get("venu");
console.log(value)

// number of key-value pairs
let length = map.size;
console.log("Total legth = ", length)

// clearing all data in map
map.clear()
console.log(map)

//set
let arr = [10, 20, 30, 40, 40, 50] // it has duplicates
let newSet = new Set(arr)
console.log(newSet) // it removed duplicates

//adding 
newSet.add(60)
console.log(newSet)

// delete
newSet.delete(10)
console.log(newSet)

// check if value exists
console.log(newSet.has(60))

//remove all entries
newSet.clear()
console.log(newSet)
