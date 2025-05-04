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

// fetching data from an API using
const api = "https://restcountries.com/v3.1/name/india"

// '.then()' chaining method
fetch(api)
.then(response=>{
    return response.json()
})
.then(data=>{
    console.log("using .then chaining method")
    console.log(data[0].name)
})
.catch(error=>{
    console.log(error.message)
})

// using async and await
async function getIndiaDetails(url) {
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log("using async/awat method")
        console.log(data[0].name)
    }catch(error){
        console.log(error.message)
    }
}

getIndiaDetails(api)