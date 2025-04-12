## Event handling
### 1. Events
Events are actions that happen in the browser — like clicking, typing, loading, etc.
### Event Handling
Event Handling means writing code to respond to those events.

### 2. some of the common event types: 
1. `click`:	when an element is clicked
2. `submit`: when the form is form submission
3. `keyup`: Key released
4. `keydown`: Key pressed
5. `change`: input value changed
6. `mouseover`: Mouse hovers
7. `load`: page finished loading (including `dom`, +`css`+`images`, `iframes` and everything)
8. `DOMContentLoaded`: page finished loading (only `dom`)

### 3. ways to listen & handle events
1. `Inline (in HTML – not recommended)`
```HTML 
<button onclick="alert('bhAAi')"> click </button>
```
2. using DOM elemnt’s property
```JS
document.querySelector("button").onclick = function(){ alert("bhAAi") }
```

3. using `addEventListener`
```JS
document.querySelector("button").addEventListener("click", ()=>{ alert("bhAAi") })
```

### 4. Adding and Removing Event listeners
`elemt.addEventListener(event, callback, useCapture)`: 
1. This method is used to attach an event listener to an element.
2. It takes the following values as arguments:
    - `event`: the type of event we want to listen (like `click`, `submit`).
    - `callback`: It is the event handler function. when the `event` is triggered, this function runs and JS automatically passes `event object` as an argumnet to this callback.
    - `useCapture (optional)`: a boolean value indicating whether to use the `capture phase (true)` or `bubbling phase (false, default)`.

`elemt.removeEventListener(event, callback)`:
1. This method is used to remove an event listener that was previously added.
2. It takes two arguments:
    1. `event`: the same type of event we had used for `addEventListener`
    2. `callback`: the same callback func we had used in `addEventListener`.
#### Note: if we want to remove an event then the callback func must not be an anonymous function.

### 5. Event object
1. When an event is triggered (like a click, keypress, etc.), JavaScript automatically passes an event object to the event handler function. This object contains information about the event.

#### Props in event obj
1. `event.type`: returns the type of event triggered like `click`, `mouseover`, etc
2. `event.target`: refers to the element that triggered the event.
3. `event.currentTarget`: refers to the element to which the event listener is attached.
4. `event.preventDefault()`: stops the default behavior of the event. Commonly used with form submissions, link clicks, etc.
5. `event.stopPropagation()`: stops the event from bubbling or capturing further.
6. `event.key`: returns the key pressed like `enter`, `a`, etc. used with `keydown` like events
7. `event.clientX & event.clientY`: returns the mouse positions relative to viewport.

### 6. Event Propagation
Event Propagation is about, event travelling between the nodes, when an event like a `click` occurs, it travels in two directions:

`Capturing Phase` (Top → Target):
The event starts from the `top-most node` (e.g., window or document) and moves down towards the `target node` (the element you clicked).

`Bubbling Phase` (Target → Top):
The event starts from the `target node` and moves down towards the `top-most-node`.

By default all events follow `Bubbbling`, we can chnage it by setting `useCapture` as `false`.

### 7. Event Delegation
1. Event delegation is a technique where you `attach a single event listener to a parent element`, and the event is handled by that parent when triggered by any child element. 
2. we use `bubbling` for this
3. It uses `less memory`as we are attaching only one event listener and
`handles dynamically added elements` becoz we no need to reattach event listeners after adding new elements.