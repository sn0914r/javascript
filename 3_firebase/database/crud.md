## CRUD Operations in Real time data base
### CREATE
1. the `set()` is used to write data in the database.

2. it takes a `two` main argumnets:
    1. `referance/path` to the `childNode` returned by `ref()` function.
    2. `data object`

3. `ref()` function takes two main arguments:
    1. `database instance`: returned by `getDatabase()` function
    2. `referance`: path where to add node

4. the `set()` function  returns a promise;
    1. promise returns `undefined` when `resolved`.
    2. promise returns `error object` when `rejected`.
```JS
let referance = ref(realtimeDB, "users/siva")
let data = {
    name: "Sivananda Reddy",
    branch: "CSM"
}
await set(referance, data)
```

#### Note:
1. The `keys` should be `strings`
2. the `values` can be `strings`, `numbers`, `arrays`, `objects`, `booleans` or `nested objects (JSON-like structure)`

### READ
We can read data in two ways:
    1. using `get()` function
    2. using `onValue()` function
    
#### `get()`
1. the `get()` returns the snapshot of data at a point of time.

2. it takes the node `referance` returned by the `ref()` function  

3. `get()` function returns a promise that resolved into `DataSnapshot`

4. `DataSnapshot` methods& props:
    1. `DataSnapshot.exists()`: returns `true` if document exists else `false`
    2. `DataSnapshot.val()`: returns `data` if exists else returns `null`
    3. `DataSnapshot.key`: returns the `key` of the data (like `sivananda` in `users/sivananda`)
```JS
let refernace = ref(realtimeDB, "users/siva");
let dataSnapshot = await get(referance)
if (dataSnapshot.exist()){ // checks if dataSnapshot exits
    console.log(dataSnapshpt.val()) // logs { name: "Sivananda Reddy", branch: "CSM" }
    console.log(dataSnapshot.key) // logs siva
}else{ // runs if snapSHot doesn't exist
    console.log(dataSnapshot.key) // logs siva
    console.log(dataSnapshot.val()) // logs null
}
```

#### `onValue()`
1. This is used when you want to continuously `listen to changes` at a particular database path.

2. `onValue()` function takes two arguments:
    1. `referance` to the path we want to listen to (created by `ref()`) 
    2. a callback function that receives a `DataSnapShot` every time data changes.

3. It runs: 
    1. immediately with current data
    2. and every time the data changes

4.  `onValue()` does not return a Promise.  
    1. Firebase just `fires` the `callback` when data changes and doesn't wait for anything.
    2. so we don’t need `async/await`.
    3. But if we want, we can mark the callback as `async` to use `await` inside it (e.g., calling APIs, saving data elsewhere). Firebase will still not care about the result or wait for it — it’s fire-and-forget.
```JS
onValue(ref(realtimeDB, "users/sivananda/address"), (e)=>{
    console.log("data changed");
    console.log(e.val()) 
    // run this file and manually change the data in databse,
    // then this function will run, it’s working.
})
```

### UPDATE
1. `update()` fn only chnage the fields we specify. where as `set()` overwrites everyting at that path.
2. `update()` takes two important argumnets:
    1. `referance` by `ref()`
    2. `data object` to update the new data
3. this `update()` fn only updates the keys you pass.
4. for nested updates we use the slash `/` symbol to go deep like `address/city`,
5. it returns a promise, on `resolve` it returns `void` and if `rejected` it returns the `error` object.
 
#### Note:
1. If a key doesn't exist, then `update()` will create it.
2. To remove a field (delete the node), set its value to `null`.
```JS
await update(ref(realtimeDB, "users/sivananda/address"), {
    city: "madanapalle", state: "Andhra pradesh"
})
```

### DELETE
1. The `remove()` function in firebase is used to delete data at a specific path.

2. it takes a single argument i.e., `referance` to the data we want to delete, returned by `ref()` function

3. It removes the entire node and everything inside it

4. It returns a promise
    1. `resolves` into `void` on success
    2.  reject with an `error object`
```JS
await remove(ref(realtimeDB, "users/venu"))
```

### Note
We must import `ref`, `set`, `get`, `onValue`, `update`, `remove` from `firebase/database`.
```JS
import { ref, set, get, onValue, update, remove } from "firebase/database";
```