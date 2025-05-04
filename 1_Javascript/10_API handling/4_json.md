## JSON
1. `JSON` stands for `JavaScript Object Notation`.
2. It is a `data exchange format` commonly used by `APIs` to `send` and `receive data`
3. JSON is language-independent, so we can easily exchange data between a server written in Python and a client in JavaScript
4. JSON structures data in `key-value pairs` just like objects in JS
5. In JSON the data:
    1. must be in `key-value pairs`
    2. each pair must be `separated by commas`
    3. the keys `must be strings`
```JSON
{
    "name": "Sivananda Reddy",
    "college" : "sistk",
    "id": "234E1A33B5"
}
```

### JSON Data types
1. JSON file can accept the following types as values:
    1. `string`
    2. `number`
    3. `object`
    4. `array`
    5. `boolean`
    6. `null`
#### Note:  JSON values cannot be a `function`, `undefined` & it doesn't allow comments
```JSON
{
    "string": "string",
    "number": 23,
    "object":{
        "key1": "value1",
        "key2": "value2",
    },
    "array": [10, 20, "hi"],
    "boolean": true,
    "null": null
}
```

### Manipulating JSON Object with JS
1. When receiving data from the web server, the data is always in the form of `json string`
2. we use the Javascript function `JSON.parse()` to `JSON string` into a  `javascript object`.
3. When we need to send data to server, the data should be sent as a string.
4. So we use `JSON.stringify()` function to convert a `JS object` into `JSON string`
```JS
// Converting JSON string to JavaScript Object
let dataReceivedFromServer = '{"name":"Siva","college":"SISTK", "id": 6}'
const object = JSON.parse(dataReceivedFromServer);
console.log(object.name) // output: siva

// Converting JavaScript Object to JSON string
const object = { name: "Siva", age: 21 };
const jsonString = JSON.stringify(student);
console.log(jsonString); // output: {"name":"Siva","age":21}
```