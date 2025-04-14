## Promises
1. A promise is an object that represents a value that might not be available right now, but will be ready later — either with a success result or an error.

2. `Three states of promise`:
    1. `Pending state`: The initial state of a promise. The promise is still waiting; it's neither completed nor failed yet.

    2. `Fulfilled`: The operation finished successfully, and the promise has a result.

    3. `Rejected`: Something went wrong, and the promise failed with an error.

3. The syntax to create a promise is:
```JS
let promise = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise.then((result) => {
  console.log(result);  // Output: Success!
});
```
  
### `.then` and `.catch`
#### `.then()`:
1. It is used to handle the success result of a promise. 

2. It takes a `callback fn` as an arg and the `resolved result` is passed as arg to the callback when the promise is fullfilled.

3. It is asynchronous as it waits for the promise to resolve before executing the callback function.

4. The callback function inside `.then()` runs when the promise is resolved (fulfilled)

#### `.catch()`
1. It is used to handle the rejection (error) of a promise.

2. It takes a `callback fn` as an arg. The` rejected error` is passed to the callback when the promise is rejected.

3. It is asynchronous as it waits for the promise to resolve before executing the callback function

4. The callback function inside .catch() runs when the Promise is rejected (fails).


#### `.then()` chaining
1. promise chaining means calling multiple `.then()` one after another, where each .then() waits for the previous one to finish.

2. It helps you run `async tasks step-by-step`, where the `output of one step is passed to the next`.

3. to allow chaining `.then()`  always returns a new Promise

4. If the callback passed to `.then()` returns a value, .then() wraps it in a resolved Promise like `new Promise.resolve(value)`.
    
5. If the callback returns a Promise, then the next `.then()` waits for that Promise to finish.

6. if you don’t return anything in `.then()` then JS implicitly returns `undefined` which then wrapped as promise like `new Promise.resolve(undefined)`.

7. `.catch()` is used to handle errors that happen anywhere in the chain before it so we don't need to attach `.catch()` after every `.then()` instead we just attach a single `.catch()` at the end of the chain to catch any error that occurred before.
```JS
    Promise.resolve(50) // the promise is immediately resolved and return 50 
    .then(function(value){ // the resolved value '50' is passed to callback in '.then'
    return value  // it returns the value
    })
    .then(function(value){ // it gets the value returned by previous then
    return new Promise(function(resolve){ // this .then method returns another new promise
        return setTimeout(function(){
            resolve(value) // the value is resolved after 2 seconds
        }, 2000)
    })
    }) 
    .then(function(value){ // this methods wait for 2 seconds to resolve promise retured by the previous .then
        console.log(`value is ${value}`) // logs the resolved value
    })
    .then(function(value){ // the value will be undefined because the previous .then doesn't return anyting.
        console.log(value)
    })
```  
### pending
#### Running multiple promises at a single time with `Promise.all()` & `Promise.allSettled()`

#### `async & await` vs `.then() chaining`
1. `asnyc & await` provides a cleaner way better than `.then()` to handle promises.
2. The `async` keyword before the function makes the function `asynchronous`. (note: the async functions always return a promise)
3. The `await` keyword is placed before the promise, it waits for the promise to resolve or reject. 
4. we can only use `await` keyword inside the `async` function 
5. `async & await`doesn't handle errors automatically like `.catch()` in `.then() chaining`. So we use `try/catch` inside the async functin to handle errors.
