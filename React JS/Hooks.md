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
7. `useId` - to generate random unique IDs

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

export 
```
