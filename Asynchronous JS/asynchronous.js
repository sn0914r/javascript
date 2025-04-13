Promise.resolve(5)
.then(function(val){
    return new Promise(function(resolve){
        return setTimeout(function(){
            resolve(2)
        }, 2000)
    })
})
.then(function(value){
    console.log(`from second then ${value}`)
})
.then(function(value){
    console.log(`last then: ${value}`)
})