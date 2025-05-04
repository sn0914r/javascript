1. The `Array Iteration methods` allows us to loop through an array and apply a function to each element.
2. It is also called as `high order functions`.
3. These methods take a call back function as argument and the `element` and its `index` are implicity passed as argument to the callback function by the JS.
4. The `Array Iteration methods` are :
    | S.No | method | what it returns |
    |------|--------|---------------|
    |1|`.map()`|array|
    |2|`.forEach()`|nothing|
    |3|`.filter()`|array|
    |4|`.reduce()`|integer|
    |5|`.every()`|boolean|
    |6|`.some()`|boolean|
    |7|`.find()`|element|
    |8|`.findIndex()`|index|

### .map()
The `.map()` function takes a callback function as argument. The callback must return an a new value, and this new value is added to a new array, which is returned by the `.map()` function.
```JS
let multiply = [1, 2, 3, 4, 5].map((e)=>e*10) // [10, 20, 30, 40, 50]
```

### .forEach()
1. The `.forEach()` method is used to loop through each element in an array. It doesnt return anything, and anything the callback function returns will be ignored.
2. This is method is generally used for logging, updating variables and updating the DOM.

### .filter()
1. It takes a callback function. The callback must return a Boolean, If it's true then the element is kept otherwise its ignored and This method returns an array with filtered elements.
2. This method is used for filteration.
```JS
let evenNums = [1, 2, 3, 4, 5, 6, 7].filter(e=>e%2===0) // [2, 4, 6]
```

### .reduce()This method converts an array into a single value.
1. It takes a `callback` function and an `initial value` as `arguments`.
2. The callback function takes two arguments: `accumulator` and `currentValue`.
3. The `accumulator` is the `initial value` (passed as the second argument to the reduce function) during the first iteration, and `currentValue` is the `first element` in the array.
4. At each iteration, the value returned by the callback is used as the new accumulator, and currentValue moves to the next element in the array.

```JS
let array = [1, 5, 6, 8, 2, 4, 4]
console.log(
    array.reduce((acc, cur)=>{
        return acc+cur
    }, 0)
) // 30
```

### .every()
1. the `.every()` method is used to check if every element in the array satisfies a given condition. If all elements satisfy the given condition then it returns truel otherwise it returns false.
2. `NOTE:` The callback must return a boolean.
```JS
let isEven = [1, 2, 3, 4, 5, 6].every(e=>e%2===0) // false
```

### .some()
1. The `.some()` method works same as `.every()` method. The only difference is it returns `true` only if atleast one element in the array satisfies the condition.
```JS
let isEven = [1, 2, 3, 4, 5, 6].some(e=>e%2===0) // true
```

### .find()
1. This method returns the first element that satisfies the given condition.
```JS
let firstEven = [1, 2, 3, 4, 5, 6].find(e=>e%2===0) // 2
```

### .findIndex()
1. Similar to `.find()` method but it returns the `index`.
```JS
let firstEven = [1, 2, 3, 4, 5, 6].findIndex(e=>e%2===0) // 1
```