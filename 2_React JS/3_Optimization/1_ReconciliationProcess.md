## Reconciliation Process

1. Every browser has a Javascript Engine that parses the HTML document into a tree-like structure called `Document Object Model` or `DOM`, which is then rendered on the browser's interface.

2. On the Other Hand, during the initial render, React creates a `Virtual DOM (VDOM)`, a lightweight, in-memory copy of the Real DOM during the initial render. This allows React to perform efficient updates without manipulating the Real DOM.

3. When the component's state or props change:
    1. Instead of directly updating the Real DOM,
    2. React creates a `new Virtual DOM subtree` of that updated component (`not the entire app`)
    3. React then Compares the `new VDOM subtree` with it's previous subtree in the previous VDOM using an algorithm called `diffing`.
    4. If React sees any changes between them, then it updates the only changed parts in the Real DOM and updates the VDOM tree accordingly
    5. This process is repeated on every render, ensuring efficient updates without the need to re-render the entire UI.
    6. This entire process is called the `Reconciliation Process`.

4. In simple, `Reconciliation` is the process React uses to efficiently update the actual DOM by comparing the newly generated Virtual DOM with the previous one using `diffing algorithm`.
5. It calculates the minimal number of chnages required and updates only the changed parts, rather than re-rendering the entire UI, whenever a component's state or prop change.


```HTML
<div class="root" ></div>
```
```JS
// without react
const container = document.querySelector(".root")
function RenderHTML(){
    const h1 = document.createElement("h1");
    h1.textContent= "Without React JS"
    const p = document.createElement("p");
    p.textContent = new Date();
    cont btn = document.createElement("button");
    btn.textContent = "reload"
    container.innerHTML="";
    btn.addEventListener("click", RenderHTML())
    container.append(h1,p,btn);
}
renderHTML();

/*
Each time the reload button is clicked:
    1. It creates 3 new HTML elements
    2. Clears the entire container.
    3. Appends the new <h1>, <p>, and <button> to the DOM

Even if <h1> and <button> are the same before and after,
they are still removed and re-created (no optimization here)
*/
```
```JS
// with react
import { useState } from "react";
function Render(){
    const [time, setTime] = useState(newDate());

    const handleReload=()=>{
        setTime(new Date());
    }

    return(
        <div>
            <h1>With React JS<h1>
            <p>{time.toString()}</p>
            <button onClick={handleReload}>Reload</button>
        </div>
    )
}

<Render/>
{
/*
Each time the reload button is clicked:
    1. Only the <p> element (showing the time) is updated.
    2. React uses its Virtual DOM and Reconciliation process here.
    3. It compares the new VDOM with the previous one and 
    4. Only the real changes are reflected in the Real DOM

So, <h1> and <button> are untouched & reused.
Only the updated part (<p>) is re-rendered (this is optimized).
*/
}
```