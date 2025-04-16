## Making HTTP requests with `Axios`
1. `Axios` is an `external library` used to make `HTTP requests`.
2. it automatically transforms responses into reabale json format.
3. it handles errros more clearly than `fetch()`
4. the syntax is more cleaner and shorter than `fetch()`

##### NOTE: to use axios we must install and import it
```JS
import axios from 'axios';
```

### `GET` request with Axios
1. we use `axios.get(url)` to fetch data.
2. it returns a promsie:
    1. on `resolve`: it returns `data` (data is available at `response.data`)
    2. on `rejection`: it retuns `error object``
```JS
async function getPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data); // logs the fetched data
  } catch (error) {
    console.error('Error:', error.message);
  }
}

```

### `POST` request with `Axios`
1. we use `axios.post(url, data, [headers])`
2. the `headers` is optional & and `axios` sets `Content-Type: application/json` by `default`.
3. The `data` is a JavaScript object containing the information in `key-value` pairs. Axios automatically converts this object to JSON and sends it to the server.
4. axios automatically converts `JS objects` to `JSON`.
5. it returns a promsie:
    1. on `resolve`: it returns `data` (data is available at `response.data`)
    2. on `rejection`: it retuns `error object``


```JS

async function postData() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts/1', {
      "userId": 111,
      "title": "test post",
      "body": "test post body",
      "id": 101
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

```

### `PUT` & `PATCH`
#### `PUT`
1. `axios.put(url, data, [headers])` fully replaces a resource.
2. it returns a promsie:
    1. on `resolve`: it returns `data` that we sent for server (data is available at `response.data`)
    2. on `rejection`: it retuns `error object`

```JS
async function putData() {
  try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      userId: 1,
      title: "updated post",
      body: "updated body",
      id: 12
    });
    console.log(response.data); 
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```

#### `PATCH`
1. `axios.patch(url, data, [headers])` is used to update a part of resource.
2. it returns a promise:
    1. on `resolve`: it returns the updated resource from the server(available at `response.data`)
    2. on `rejection`: it retuns `error object`


```JS

async function patchData() {
  try {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: "patched data",
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```


### `DELETE` 
1. `axios.delete(url, [headers])` is used to delete a resource from the server.
```JS
async function deleteData() {
  try {
    await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  } catch (error) {
    console.error('Error:', error.message);
  }
}
```