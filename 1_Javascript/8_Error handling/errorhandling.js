class ZeroError extends Error{
    constructor(){
        super("Cannot divide with Zero")
        this.name = "ZeroDivisionError."
    }
}

function division(num1, num2){
    if (num2==0){
        throw new ZeroError();
    }else{
        console.log("result: ", num1/num2);
    }
}

try{
    division(5,0);
}catch(e){
    console.log("Error occured")
    console.log("Error name: ",e.name)
    console.log("Error Message: ", e.message)
}

// error handling with promises
const promise1 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        reject(new Error ("failure"))
    }, 2000)
});
promise1
.then(res=>console.log(res))
.catch(err=>console.log(err))

const promise2 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        reject(new Error ("failure"))
    }, 2000)
})

async function promiseErrhandling(){
    try{
        const res = await promise2;
        console.log(res);
    }catch(error){
        console.log("error from async fn: ", error.message)
    }
}
promiseErrhandling()