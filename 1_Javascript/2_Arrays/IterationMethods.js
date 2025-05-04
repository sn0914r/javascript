let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map
console.log(
    array.map(e=>{
        return e*10
    })
) // [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]

// forEach
array.forEach(e=>{
    console.log(e)
}
) // 1 2 3 4 5 6 7 8 9 10

//filter
console.log(array.filter(e=>{
    return e%2===0;
})) // [ 2, 4, 6, 8, 10 ]

//reduce
console.log(array.reduce((acc, cur)=>{
    return acc+cur
}, 0)) //55

// every
console.log(array.every(e=>{
    return e%2===0 
})) // false

// some
console.log(array.some(e=>{
    return e%2===0 
})) // true

//find
console.log(array.find(e=>{
    return e%2===0
})) // 2

//findIndex
console.log(array.findIndex(e=>{
    return e%2===0
})) // 1
