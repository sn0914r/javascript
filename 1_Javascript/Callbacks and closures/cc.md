### callbacks
1. A callback is a function that is passed as an argument to another function, so it can be called later (or after something happens).
2. it is used to run code after something finishes, handle asynchronous tasks (like API calls, timers, file reads)

```JS
// This is the callback function that just logs greetings
let callbackfunctin=(name)=>{
    console.log("hello", name)
}

// this function checks the age
// If eligible, it runs the callback function
function amIEligible (age, callback, name){
    if (age<=18){
        console.log("you are not eligible")
    }else{
        callback(name)
    }
}

amIEligible(29, callbackfunctin, "siva") // here we passed a calback and set it to  exexutes when age is above 18 

output :
hello siva
```

### clousers
1. a function is called a closure when it remembers and  have access to the variables from its parent function (the outer function), even after the parent function has finished executing.
```JS
function outerFn(){ // parent
    let data = "Data"
    function innerFn(){
        console.log(data)
    }
    return innerFn // clousers, i remembers `data` from its parent
}
```
2. Since closures remember their environment, they can sometimes cause memory issues if not handled properly.