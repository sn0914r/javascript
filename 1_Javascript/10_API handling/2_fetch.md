## Making HTTP requests with `fetch()`

### `GET` - retriving the data 
1. we use `GET` method to fetch a resource from a server.
2. `fetch()` takes two argumnets:
    1. `url`: the api url
    2. `options object` (optional): an object to specify the method, headers and data
3. `fetch()` returns a `promise`:
    1. on `rejection`: it throws an `error` object.
    2. on `resolve`: it returns a `response` object. but the data is not in readable format. we use `.json()` method to parse the response.
    3. `.json()` returns a promise, on resolve - we get readable json object on error - it throws an `error` object.
```JS
async function getData(){
    try{
        const response = await fetch(apiUrl); // resolves into response object but the data isn't in a reable format
        const parsedResponse = await response.json() // converts the data into readle json format
        console.log(parsedResponse) // logs the parsed data
    }catch(error){
        console.log(error.message) // logs the errors
    }
}
```

### 'POST` - sending data to server (CREATE)
1. the `POST` method is used to post data to server.
2. `fetch()` takes two arguments:
    1. `url`
    2. `options` object with:
        1. `method`: `POST`
        2. `header`: meta data like 
            1. `Content-Type: application/json`: this says we are sending data in `JSON` format
        3. `body`: data in `stringified` `JSON format` 
3. `fetch()` returns a `promise` that resolves to response object, which contains the data we sent.

```JS
async function postData(){
    try{
        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json" // it tells the server that we are sending data in json format
            },
            body: JSON.stringify({ // the method to stringify the JSON
                // the data we are sending
                "userId": 111,
                "title": "test post",
                "body": "test post body"
            })
        })

        const data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error.message)
    }
}
```

### PUT
1. The `PUT` method replaces the full resource at a given ID.
```JS
async function updateWithPut(){
    try{
        const response = await fetch(url, {
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "id": 1, "title": "updated title",
                "body":"updated body", "userId": 1
            })
        })

        const data = response.json();
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}
```

### PATCH 
1. the `PATCH` method updates only part of the resource.
```JS
async function updateWithPatch(){
    try{
        const response = await fetch(url, {
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "title": "updated title",
            })
        })

        const data = response.json();
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}
```

### DELETE
1. `DELETE` removes the specified resource.
2. The response is usually `empty` but can be checked using `response.ok`.
3. `response.ok` returns a `boolean`:
    1. `true`- for success response from server 
    2. `false` - for failure response from server

```JS
async function delete(){
    try{
        const response = await fetch(url, {
            method: "DELETE",
        })

        if (response.ok){ // checks the response, if deleted returns true else false
            console.log("deleted")
        }else{
            console.log("failed to delete")
        }

        const data = await response.json(); // will be empty
        console.log(data);  // logs empty string
        
    }catch(error){
        console.log(error.message)
    }
}

```

#### NOTE:
1. its bettwer to check `response.ok` before parsing.