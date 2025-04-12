# Object

The `object` is a `collection of key-value pairs` (called as properties and methods)

### 1. Ways to create an object in the following ways:
1. Using the `Object literal`:
```JS
const obj = { key: "value" };
```

2. Using the `new Object()`:
```JS
const obj = new Object();
//adding props
obj.name= "siva"
```

3. Using the `construcor function`:
```JS
function Person(name){
    this.name = name;
}
const object = new Person("siva"); //{ name: siva }
```

### 2. Accessing and Modifying the properties in object
1. using the `dot operator`.
```JS
const value = object.key //accessing
object.key = "value" // updating or creating a property
```
2. using the `square braces`;
```JS
const value = object["key"] //accessing
object["key"] = "value" // updating or creating a property
```

### 3. Object Methods
1. `Object.keys(object)`: It returns an `array of keys` in the `object`.
2. `Object.values(object)`: It returns an `array of values` in the `object`.
3. `Object.entries(object)`:It returns an `array of arrays [key, value]` pairs.
```JS
const object = {
    name: "Siva",
    father: "Narasimha Reddy",
    mother: "Amaravathi"
}
console.log(
    Object.entries(object) 
)
// output:
[
    ["name", "Siva"],
    ["father", "Narasimha Reddy"],
    ["mother", "Amaravathi"]
]
```
4. `Object.assign({}, obj)`: 
    1. It returns the copy of `obj`.
    2. all the props in obj are added to that target `{}`,
    3. If target `{}` already has some props then new props are just added.
```JS

const obj = {
    name: "Siva",
    skills: ["Bootstrap", "JS"]
}

const copy = Object.assign({}, obj);

// Note: Only the top level primitives data types are copied by value(deep) and remaining are shallow copied

//example: 
copy.name: "Reddy",
copy.skills.push("CSS");

console.log(
    "Original Object: ", obj,
    "\n",
    "Copied Object: ", copy
)

// output: 
Original Object: { name: "Siva", skills:["Bootstrap", "Css", "JS"] }
Copied Object: { name: "Reddy", skills:["Bootstrap", "Css", "JS"] }
```
5. `Object.freeze(Object)`: 
    1. It `freezes the original object` and also returns the same object, but in a frozen state. (It means we `can't add, delete or modify the properties`).
    2. It `only freezes the top level primitives`.
    3. For deep freezing we must use an helper function.

6. `Object.seal(object)`: Same as `Object.freez()`, the only difference is it allows us for `modification` of properties and restricts the `adding` and `removing`.

7. `Object.hasOwn(Object, key)`; checks if `object` as the `key` and returns a boolean.

8. `Object.fromEntries(entries)`: converts the `Object entries` into an `object`.

##### pending methods:
1. `Object.defineProperty(object, key", helperObject)`
2. `Object.getOwnPropertyDescriptors(object)`
3. `Object.is(value1, value2)`

### 4. `this` keyword in objects
1. this refers to the current object (the one calling the method).
2. Arrow functions do not have their own this — they inherit it from the outer scope.
3. Use regular functions in object methods if you need this to refer to the object.