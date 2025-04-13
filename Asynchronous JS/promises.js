Promise.resolve(50) 
.then(function(value){ 
    return value  
})
.then(function(value){ 
    return new Promise(function(resolve){ 
        return setTimeout(function(){
            resolve(value) 
        }, 2000)
    })
}) 
.then(function(value){ 
    console.log(`value is ${value}`)  // 50
})
.then(function(value){ 
    console.log(value) // undefined
})