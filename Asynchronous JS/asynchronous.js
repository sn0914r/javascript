setTimeout(()=>{
    console.log("Hello")
}, 3000) // it runs the cb after 3 seconds

let count = 10;
let id = setInterval(()=>{
    console.log("set interval func")
    if (count==0){
        clearInterval(id)
    }
    count-=1
}, 2000) // it runs cb for every 2 seconds for 10 times
