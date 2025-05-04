## Error Handling
1. Error Handling allows us to manage unexpected error in our program.
2. Instead of terminating the entire program when an error occurs, error handling lets us define what actions to do when an error occurs like `show an error message`, `retry the operation`, `log the error`, etc

## Types of Errors in JS
1. `TypeError`: occurs when a value is not of the expected type.
2. `ReferanceError`: occurs when referancing a variable that don't exist.
3. `SyntaxError`: invalid syntax
and more...

### Categories of Errors in JS
1. Syntax Errors
2. Runtime Errors (during program execution)
3. Logical Errors (Code runs, but behaves wrongly)
#### Note: JavaScript is an interpreted language ( no compile time errors ), the syntax errors doesn't stop the script from running but stops when parsing

### The `try` and `catch` statements in Error handling
1. `try` and `catch` are used to handle `runtime errors` in Javascript.
2. We write the code that may throw an error inside the `try` block.
3. If an error occurs in `try` block then that error will be caught and handled by the `catch` block.
4. The `catch` block receives the `error object` thrown by the code in the `try` block.
5. If `no error` occured then the `catch` block will be `skipped`
```JS
try{
    // code that may rise an error
}catch(errorObject){
    // code to handle the error
}
```
### `finally` block in Error handling
1. The `finally` block is an `optional part` of Error handling, it is guranteed to execute.
2. It always run, even if there was an error in the `try` block or if no error occured.
3. it's generally used for cleanup opeartion like the tasks that should be done regardless of success or failure, like closing files, clearing timers or releasing resources (freeing memory)
```JS
try{
    // try block
}catch(error){
    // catch block
}finally{
    // finally block - always runs, regardless of whether an error occurred or not, it is optional
}
```
### `throw` Statement
1. `throw` statement allows us to manually throw an error.
2. This can be useful when we need to raise an error explicitly based on a condition in our program.
3. Syntax :
```JS
throw new Error("Error message here")
```
```JS
function divide(a,b){
    if (b===0){
        throw new Error ("Cannot divide by Zero");
    }
    return a/b;
}

try{
    divide(5,0)
}catch(e){
    console.log(e.message)
}
// output: Cannot divide by Zero
```
### Custom Error Types
1. We can create our own error types just like `SyntaxError`, `ReferanceError`, etc by extending to the `built-in` `Error` Class.
```JS
class bhAAiError extends Error{
    constructor(message){
        super(message);
        this.name = "bhAAiError";
    }
}
// we created our cutom error type, now we can sue it using the throw statement like
throw new bhAAiError("This is a custom Error!")
```

### Promise Error Handling with `.catch()`
1. When we are working with Promises, we can handle errors by chaining a `.catch()` method to the promise.
2. This `.catch()` method will capture any error that occurs in the chain of `.then()` blocks
```JS
fetch(url)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.error("Error fetching data: ", error));
```
### Promise Error Handling with `async/await` and `try...catch`
1. When we use `async/await`. we can handle errors using `try...catch` blocks.
```JS
async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error: ", error.message);
  }
}
```
