## API Handling
### API - `Application Programming Interface`
1. An API lets your frontend (JavaScript) communicate with a backend server to get or send data—usually in JSON format.
2. we use HTTP requests (like GET, POST, PUT, DELETE) in JavaScript to communicate with a server — usually to fetch or send data.
3. we can send HTTP requests in JavaScript using the following methods:
    1. `fetch()`: inbuilt function for making HTTP requests.
    2. `axios()`: external library, with simple syntax and better error handling.

4. The main HTTP requests involved in API Handling are:
    1. `GET`: this method is used to `retrieve data` (e.g., fetch a post)
    2. `POST`: this method is used to `send data` to the server (e.g., create a post).
    3. `PUT`: used to replace/update the full data (e.g., update a post with new data).
    4. `PATCH`: Update only part of data/resource (e.g., update only the title of a post).
    5. `DELETE`: Remove a data/resource (e.g., delete a post).