## ES6
### 1. let and const
1. `let` and `const` are block-scoped. i.e, they are accessible only with in the block they are created.
2. In brower environment, the variables delared with `var` are auttomatically attached to the `window`. This problem was fixed with `let` and `const` introduced in Es6.
3. `let` allows us to reassign the variable.
4. `const` does not allow reassignment, its only used to declare constants.

### 2. Arrow Functions:
1. This are functions with short syntax.
2. syntax: `(args)=>{//function body}`

### 3. Template literals
1. Template literals allows us to include variables or expressions into a string, without the need of concatenation.
2. it uses `backticks` and `${}`

### 4. destructuring
Destructuring allows us to unpack the values from an array or object into separate varibales.
```JS
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // logs 10
console.log(b); // logs 20
console.log(c); // logs 30
```
#### Note : in arrays it gets value by position while in objects it gets values by property name

### 5. default paramters
1. we can give default values to the functions, when no argumnet passed then functions use this default values as argumnets
```JS
function functionName(param1 = defaultParams,...)
```

### 6. Rest & Spead Operators
#### `Rest`
1. the `Rest` operator used to collect values into a single variable.
2. syntax:  `...`
3. generally used in function parameter lists, when the number of arguments is unknown.
4. all collected arguments are stored as an array.
```JS
function numsREST(...numbers) {
  console.log(numbers)
}
numsREST(1, 2, 3, 4, 5, 6) // [1, 2, 3, 4, 5, 6]
```

#### `Spread`
1. the `spread` operator is used to expand or npack elements from arrays or objects.
2. syntax: `...`
3. generally used to copy, merge, or pass values.
4. used with arrays and objects
```JS
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 22, 3, 4, 5]
```

### Map & Set
#### `Map`
1. like object, `map` stores data in `key-value` pairs.
2. `Keys` can be `anytype` where as objects support only strings as keys.
3. Maps maintains the insertion order where as objects don't.
4. synatx: `let myMap = new Map()`.
5. The `map()` accepts entries as arguments. 
##### `map methods`
1. `.set(key, value)`: add or update a key-value pair.
2. `.get(key)`: get the value for key.
3. `.has(key)`: check if a key exists and returns a boolen.
4. `.delete(key)`: remove a key-value pair returns a boolean.
5. `.clear()`: remove all entries
6. `.size`: get the numbers of key-value pairs.

#### `Sets`
1. stores the unique values and removes duplicates
2. It accepts all types of data and maintains the insertion order
3. synatx: `let mySet = new set()`
4. `sets` accepts array and strings as argument
##### `set methods`
1. `add(value)`: adds a value.
2. `delete(value)`: removes a value	
3. `has(value)`: checks if a value exists and returns a boolen.
4. `clear()`: removes all values
5. `size`(property): returns number of elements in the set
#### Note: we can't update an elemnt at specific index in sets like an array.

### Other ES6 Features
1. `Promises`
2. `Modules (import/export)`
3. `classes`