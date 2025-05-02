// array methods
let frontend = ["HTML", "CSS", "JS", "JS"]
let backend = ["Flask", "SQL"]
let uiux = "figma"

//concat
console.log(frontend.concat(backend)) // [ 'HTML', 'CSS', 'JS', 'JS', 'Flask', 'SQL' ]

//length
console.log(`length of frontend array: ${frontend.length}`) // 4

//indexOf
console.log(`first occurence index of JS: ${frontend.indexOf("JS")}`) // 2
//lastIndexOf
console.log(`last occurence index of JS: ${frontend.lastIndexOf("JS")}`) // 3
// includes
console.log(`is HTML exist in frontend: ${frontend.includes("HTML")}`) //true
//Array.isArray
console.log(`is uiux an Array: ${Array.isArray(uiux)}`) // false
// toString
console.log(frontend.toString()) // HTML,CSS,JS,JS
// join()
console.log(frontend.join("-")) // HTML-CSS-JS-JS

//slice
console.log(frontend.slice()) // ["HTML", "CSS", "JS", "JS"]
console.log(frontend.slice(1)) // ["CSS", "JS", "JS"]
console.log(frontend.slice(1, 3)) // ["CSS", "JS"]

//splice
backend.splice(1) // ["Flask"]
console.log(backend)

frontend.splice(1, 3) // ["HTML"]
console.log(frontend)

frontend.splice(1, 0, "CSS", "JS", "ReactJS") // [ 'HTML', 'CSS', 'JS', 'ReactJS' ]
console.log(frontend)

//push
backend.push("SQL") // [ 'Flask', 'SQL' ]

//unshift
backend.unshift("Python")
console.log(backend) // [ 'Python', 'Flask', 'SQL' ]

//pop
console.log(backend.pop()) // "SQL"
//shift
console.log(backend.shift()) // "Python"
console.log(backend) // "Flask"

//reverse
frontend.reverse()
console.log(frontend) //[ 'ReactJS', 'JS', 'CSS', 'HTML' ]

//sort
frontend.sort()
console.log(frontend) // [ 'CSS', 'HTML', 'JS', 'ReactJS' ]