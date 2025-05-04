## Hooks
1. Hooks are special functions in React that allow us to use React features like `state management`, `handling side effects`, `optimization`, etc in `functional components`
2. In React, any function that starts with `use` is considered a hook.
3. we can create our own `custom hooks` by writing a function that starts with `use` like this:
```JS
function useCustomHook(num){
    const [state, setState] = useState(num)
    const increment=()=>setState(state+1);
    const decrement=()=>setState(state-1);
    
    return [state, increment, decrement];
}
```
4. Hooks must be `called at top level` of a `React component` or a `custom hook` (functions that start with `use`) and we should not use hooks in the following situations:
    1. inside loops
    2. inside conditions
    3. inside regular Javascript functions
These rules exist so React can correctly track the order of hook calls during rendering

## Some of the hooks in React
1. `useState` - to add state
2. `useEffect` - to handle side effects
3. `useContext` - used to access shared data by (`content providers`) across components
4. `useRef` - to access DOM nodes 
5. `useMemo` & `useCallback` - for optimization
6. `useReducer` - for handling complex state logic

## useState
1. `useState` is a React Hook that allows to add state to functional components.
2. The `useState` takes `initial value` as argument and returns an `array` that has two elements:
    1. `state variable` - contains the current value
    2. `setter function` - used to update the state variable
```JS
function Mycomponent(){
    let [state, setState] = useState(0)

    const changeState=()=>setState(state+1) // setter function takes the current state values, adds 1 to it and then updates the state variable

    return <div>
        <p>state: {state}</p> {/* the 'state' contains the current state */}
        <button onClick={changeState}>change state</button>
    </div>
}
```
3. React `Re-renders` the component `when state value changed`.
4. React components `remember useState values` across `re-renders`, which makes it different from normal Javascript variables.
5. `Normal variables` are `reset` every time the component re-renders, but state variables remember data between renders.
```JS
function Mycomponent(){
    let [state, setState] = useState(0)
    let normalVariable = 0
    const changeState=()=>setState(state+1) 
    const changeNormalVariable=()=>{normalVariable+=1; console.log(`countUpdated: ${normalVariable}`)}

    return <div>
        <p>state: {state}</p> 
        <p>normal variable: {normalVariable}</p>
        <button onClick={changeState}>change state</button>
        <button onClick={changeNormalVariable} >change regular variable</button>
    </div>
}
// the updates for 'normalVariable' are not rendered on webpage but saved in memory and logs to console
// when we update the state variable, component is re-rendered and the 'normalVariable' value is reset to 0
```

## useEffect
1. `useEffect` allows us to perform `side effects` in functional components.
2. `side effects` are actions that interact with things outside our component like:
    1. Fetching data from an API
    2. Changing the browser title - `document.title`
    3. Setting timers - `setTimeout` & `setInterval`
    4. Logging to console
    5. Adding or removing event listeners - `addEventListener` & `removeEventListener`
3. `useEffect()` takes two argument:
    1. Callback function - `the effect`
    2. Dependency array
4. The `dependency array` controls when the `effect` (callback) runs.
    1. `useEffect(() => {})` - no dependency array, runs after every render
    2. `useEffect(() => {}, [])` - empty dependency array, runs once (on mount)
    3. `useEffect(() => {}, [x, y, ...])` - runs when any variable's value in the array changes.
5. `Cleanup functions` are used to `remove` or `stop` things like `remove event listeners`, `stop API calls`, `stop timers`, etc., that were started in a `useEffect`.
6. To perform `cleanups` the callback returns a function (`cleanup function`). This cleanup function runs:
    1. when the component `unmounts`.
    2. or before re-running the `effect` (if it has dependencies).
7. `cleanup` function runs in the following cases:
    1. `useEffect(() => { return () => {} })` - no dependency array, cleanup runs:
        1. after every render except the first
        2. on unmount
    2. `useEffect(() => { return () => {} }, [])` - empty dependency array, cleanup runs only once when component unmounts.
    3. `useEffect(() => { return () => {} }, [x, y, ...])` - with dependencies, cleanup runs:
        1. before the effect re-runs (if any dependency changes)
        2. on unmount
```JS
function Component(){
    useEffect(()=>{
        console.log("effect")
        return ()=>{
            console.log("cleanup")
        }
    }, [])

    return null
}
/*
the dependency array is empty, so:
    1. the effect runs only once when component mounts.
    2. the cleanup runs when the component unmounts
*/ 
```

## `createContext` and `useContext()`
1. the `createContext()` is used to share data between components (`without prop drilling`).
2. this function returns an object with two components:
    1. `Provider` - to share data
    2. `Consumer` - to access the shared data (`we don't need this`)
3. the `Provider` takes a `value` prop that accepts the value in `key-value` pairs (`object`), that is shared with other components.
4. the `Provider` Component is wrapped around the components we need to share data with.
5. the `createContext()` is called outside the component, so that `import` and `reuse` anywhere in our app
```JS
const MyContext = createContext();

function Component({children}){
    <MyContext.Provider value={{user: "siva"}}>
        {children} {/* the data is shared with children (child components) */}
    </MyContext.Provider>
}

export default MyContext;
```
6. `useContext()` is a React hook that allows us to access the data shared by the `createContext()` (`Provider Component`);
7. it takes the `object` returned by `createContext()` as argumnet and returns the same object that we passed to the `<Provider>` component as  `value`.
```JS
import MyContext from `./providerFile.jsx`
function ChildComponent(){
    let data = useContext(MyContext);
    console.table(data);
    return null;
}
// logs the data object
```

## `useRef()` hook & `ref` attribute
1. The `useRef()` hook is mainly used for two things:
    1. to `store a value` (like a variable) that `doesn't reset` when the component re-renders and `changing the value` of it `doesn't cause re-renders`.
    2. to `create a reference to a DOM Node` (like a link, button, etc), so we can access or modify it directly `with out using Document API`.
2. The `ref` attribute in a JSX element is used to link that element to the `referance` created by `useRef()`
3. this `useRef()` takes an initial value of referance and returns a mutable object and the object holds a property called `current`, it contains the initial value like:
```JS
const ref = useRef(null);
/*
ref = {
    current: null
}
*/
```
```JS
function Case1(){
    let [reload, setReload] = useState(false)
    const handleReload =()=> setReload(!reload);

    let refVar = useRef(0); // we are using useRef hook to store a value that should persist across the re-renders but doesn't cause re-render when its value changed
    const handeleRefVar=()=>{
        refVar.current+=1; // updates the value
        console.log(refVar.current) // logs the updated value
    }

  return <div>
    <p>ref Var: {refVar.current}</p>
    <button onClick={handeleRefVar} >update RefVar</button> {/* 
    1. this button increments the current refVar value by 1,
    2. updates the value in memory, 
    3. logs the new value, 
    4. doesn't show updates on screen but shows on console */}

    <button onClick={handleReload} >reload the component</button> {/*
    1. this button is used to re-render the component to show the updated value of refVar
    */}
  </div>
}
```
```CSS
/* styles for case 2*/
.addStylesToButton{

  color: white;
  background-color: blue;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  border: none;

  &:hover{
    background-color: aqua;
    color: blue;
  }
}

```
```JS
function Case2(){
    const referance = useRef(null);
    let handleClick=()=>{
        // we are using this
        referance.current.classList.toggle("addStylesToButton");
        // instead of document.querySelector("button").classList.toggle("addStylesToButton")
    }
    return (
        <div>
          <button ref={referance} onClick={handleClick} >click me</button>
        </div>
    )
}
```

## `useMemo`
1. The `useMemo()` is an hook used for `performance optimization`
2. It memorizes (remember) the result of a calculation, so it doesn't re-run unless needed.
3. It takes two main arguments:
    1. `callback function` - the function whose result we want to remember.
    2. `dependency array` - to control when the callback function (expensive function) should run.
```JS
const memoizedValue = useMemo(()=>{
    // function()
}, [dependencies])
```
4. 
    1. Suppose, we have an expensive function in our component, that     takes around 1 minute to compute the result,
    2. Without useMemo, that expensive function would re-run on every re-render and block the component.
    3. With useMemo, the last result is remembered, and the function only runs again if any dependencies change.
5. The `useMemo()` hook remembers(caches) the result of a function and returns that cached result.
```JS
function MEMOHook(){
    let result = 0;
  
    let [reRender, setter] = useState(false)
    
    const expensiveFn=()=>{
        for (let i=0; i<=1000000000;i++){
            result = result+i
        }
    }
    
    console.time("with useMemo")
    result = useMemo(expensiveFn,[])
    console.timeEnd("with useMemo")

    console.time("without useMemo")
    expensiveFn()
    console.timeEnd("without useMemo")
  
    return(
        <div>
        <button onClick={()=>setter(!reRender)} >reload component</button>
        </div>
    )
}
```
6. In the above component, the `console.time()` and `console.timeEnd()` methods are used to track time on how much time they took to produce the result/finish the execution. Here iam calling the same function inside the useMemo and outside the useMemo.I re-rendered the component for 3 times, here are the results:
    1. on first render:
        1. with useMemo: 5634.327880859375 ms
        2. without useMemo: 5537.81396484375 ms
    2. on second render:
        1. with useMemo: 0.14990234375 ms
        2. without useMemo: 5035.592041015625 ms
    3. on third re-render:
        1. with useMemo: 0.011962890625 ms
        2. without useMemo: 5328.4521484375 ms
7. Therefore the `useMemo()` is more efficient to avoid unecessary re-computation.
8. Behaviour of `useMemo` based on dependency array:
    1. `no dependency array` - runs on every render
    2. `empty dependency array` - runs only once at the first render, and never again unless the component unmounts and remounts
    3. `with dependencies` - runs only when one of the dependencies changes.

## `useCallback()`
1. The `useCallback()` hook is used to `memorize a function`  makes sure that it `doesn't get recreated on every render`.
2. It takes two main argumnets:
    1. `callback function` - the function we want to remmeber
    2. `dependency array` - controls when the function should be re-created
```JS
const rememberedFn = useCallback(()=>{
    // function
},[dependencies])
```
3. behaviour of `useCallback()` based on `dependencies`:
    1. `no dependency array` - a new function created on every render. This is the same as not using `useCallback` at all. It provides no optimization.
    2. `empty dependency array` - The function is created once and the same referance is returned forever (unless the component unmounts).
    3. `with dependencies` - The function is only recreated when one of the dependencies changes.
    
<div style="display:none;">
4. The `Javascript Garbage Collector (GC)` watches for variables, functions, and objects that no longer used in our program, and automatically frees their memory.
5. Without `useCallback`, a new function is created on every render, and the old one becomes `garbage`. GC will eventually clean it up, but: 
    1. This leads to more memory usage.
    2. with `useCallback`, we avoid unnecessary recreation, reduce GC workload, and the app runs smoother and more efficiently.
</div>

```JS
const handleClick = useCallback(()=>{
    console.log("Button clicked");
    // only created once
},[])
```
