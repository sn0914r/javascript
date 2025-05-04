# DOM - Document Object Model
1. DOM Manipulation allows us to `access`, `change`, `add`, or `remove` HTML elements and their styles using JavaScript.

2. It is important for adding `dynamic behavior` to a webpage, like updating content, reacting to user input, or changing layout/styles in real-time.

3. The `document` object is the entry point to the webpage's content in JavaScript. It `represents the entire HTML page` loaded in the browser.

4. The document object allows us to:
    - `Select the elements`
    - `Access element's content & attributes`
    - `Change elment's content & attributes`
    - `Change styles`
    - `Add/remove elements dynamically`

## Dom selectors
1. `getElementById("id")`: returns a `single element`
2. `getElementsByClassName("class")`: returns an `HTML Collection`
3. `getElementsByTagName("tag")`: returns an `HTML Collection`
4. `querySelector("selector")`: returns a `single element`
5. `querySelectorAll("selector")`: returns a `NodeList`
### Note:
The `HTML Collcetion` and `NodeList` look like arrays, but are `not real arrays` (we can use `forEach()` on NodeList, but not HTMLCollection directly).

## Dom Navigation
The DOM treats the HTML document as a tree with elements as node.
The dom navigation properties are: 
1. `element.parentElement`: selects the parentElement.
2. `element.children`: returns all children in the elemnt.
3. `element.firstElementChild`: selects the first child in the element.
4. `element.lastElementChild`: selects the last child in the element.
5. `element.nextElementSibling`: selects the next sibling element.
6. `element.previousElementSibling`: selects the previous sibling element.

## Dom attributes accessing
### 1. Attribute properties
1. `element.getAttribute(name)`: returns the attribute value.
2. `element.setAttribute(name, value)`: sets the attribute.
3. `element.removeAttribute(name)`: removes the attribute.
4. `element.hasAttribute(name)`: checks if the element has the given attribute.

### 2. dot operator
we can directly access and modify the attribute using the `dot notation` but it is limited to only some attributes, some of them are listed below:
1. `.id, .class, & .style` for all elements.
2. `.href` for anchor tag
3. `.src & .alt` for img tag
4. `.name, .value, .type, .placeholder, .disabled, & .checked` for inputs
5. `.disabled` for buttons

## Dom Manipulation
1. `element.innerHTML`: it is used to access and modify the inner html of an element
2. `element.outerHTML`: it is same as innerHTML but starts from the selector's element.
3. `elemnt.textContent`: it is used to access and modify the text inside the element.

## Dom class Manipulation
`element.classList` gives us access to all the classes of an element, and lets you manipulate them easily.
1. `element.classList.add(className)`: adds the className to the element.
2. `element.classList.remove(className)`: removes a particular className.
3. `element.classList.toggle(className)`: acts as toggle, removes the className if it exists in the classList and adds if doesn't exist.
4. `element.classList.contains(className)`: checks if a specific className available in the classList and returns a boolean.
5. `element.classList.replace(oldClassName, newClassName)`: Replaces a class

## creating, removing and appending elements using DOM 
### 1. creating elements
1. `document.createElement(tag)`: used to create an element, just pass the desired tag name as argument.

### 2. removing elements from the dom
1. `element.remove()`: removes the element from the DOM

### 3. appending the elements
`element.appendChild(element)`: 
1. It adds the element as the last child in the given element. 
2. It works on all browsers.
3. It only accepts only one element as argument.
4. It returns the appended node.

`element.append(arguments)`: 
1. It accepts multiple argumnets.
2. The argumnets can be elements or text.
3. It adds the argumnets as last children ssequencially.
4. It doesn't return anything.
5. It only works in modren browsers.

`element.prepend(element)`: similar to `append()` method but adds at the beginning

`element.insertBefore(newElement, existingElement)`: 
1. Adds an element before the `existing element`.
2. It only inserts the elements.
3. If the existing element is `null` then it works as `appendChild()` method