# BOM - Brower Object Model
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


