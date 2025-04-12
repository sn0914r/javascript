# BOM - Brower Object Model (window object)
BOM is all about interacting with the browser itself, not just the page (like DOM). It includes:
1. `window`
2. `navigator`
3. `screen`
4. `location`
5. `history`
6. `alert, prompt, confirm`

## `window`
1. The `window` is the main object in the browser that represents the browser window/tab.
2. All the global JS variables & functions become properties of this window object.

### `some of the most used window properties/ methods are listed below`.
1. `window.alert(message)`: shows a popup box with a message and an OK button.
2. `window.confirm(message)`: Shows a popup with OK and Cancel. Returns `true` if OK, `false` if Cancel.
3. `window.prompt(prompt)`: Shows a popup asking for user input. Returns the input as a string (or null if canceled).
4. `window.open(url)`: opens a new browser window/tab.
5. `window.close()`: closes the current window (if it was opened by script).
6. `window.print()`: Opens the print dialog to print the current page.

### `location property of window object`
1. `location.href`: It gets the current url of the page or navigate to some other page.
2. `location.protocol`: It returns protocol that is being used to load the current web page. It is useful when we want to check if the pae is secure(`https:`) or not secure(`http:`). And You can check if the page is secure (https) or not, and even redirect to a secure version.
3. `location.hostname`: returns the domain name (like example.com).
4. `location.pathname`: returns the path after the domain like `/about/us`, etc
5. `location.search`: returns the query string (everything after ?)
6. `location.reload()`: reloads the current page.

### URLSearchParams 
This function It helps us to read, edit, and build query strings easily.

It takes the querystring as argument and provide us methods to read, edit and build querystrings

The methods provieed by URLSearchParams are:
1. `get(key)`: returns the value of a specific key (only the first one if duplicates exist).
2. `set(key, value)`: overrides all existing values for the specific key and sets it to the new one.
3. `getAll(key)`: returns all values for a given key — useful when the same key appears multiple times in the query string.
4. `append(key, value)`: adds a new parameter at the end of the query string without removing existing ones.
5. `delete(key)`: removes all instances of the specified parameter from the query string.
6. `has(key)`: checks if the query string contains a specific parameter and returns a boolean.
7. `toString()`: returns the entire query string (without the ?);

### Screen
This props are used to access the info related to user device's screen like screen width & height.
1. `screen.width`: returns the screen width in `px`.
2. `screen.height`: returns the screen width in `px`.

### web storages
Web Storage is a browser feature to store data locally on the user’s broswer using JavaScript, without using cookies.

It is classified into two types:
    1. `local storage`
    2. `session storage`

#### `local storage`: 
1. It `stores` data `permanently` (until manually deleted).
2. the stored data can be `accessed from all tabs`/windows.
3. used in user preferences, themes, tokens and saved items.
4. it stores data in `key-value pairs` and both `key and value are stored as strings`.
5. if we have non-primitives like objects and arrays then we must stringify them using the `JSON.stringify(value)` method and when retrived we can convert themm back into arrays or objects usng `JSON.parse(value)`.
6. Max Size limit: `5mb or 10mb`.
    
#### `session storage`:
1. It stores data `temporarely`, deletes when user closes the browser.
2. the data can be `accessed only from the same tab`.
3. size limit: `5mb`.

#### properties for webstorages
1. `localstorage.setItem(key, value)`: stores the key-value.
2. `localstorage.getItem(key)`: gets the corresponding key's value.
3. `localstorage.removeItem(key)`: removes a specific key-value pair from the storage.
4. `localstorage.clear()`: removes all data in the storage.
5. `localstorage.length`: returns the total number of records stored in the storage.

###### Note: the properties are same for session storage also