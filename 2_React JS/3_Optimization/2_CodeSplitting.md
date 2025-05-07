## Code Spliting with Dynamic imports
1. By default, tools like `Webpack` bundle the entire app into one large Javascript file. That means when the app first load, even the unused components get loaded which can slowdown the intial loading time.
2. `Code spliting` allows ys to break the app into smaller chuncks (small independent pieces of code), and load them only when needed, improving performance.
3. React uses `import()` function (also called as `dynamic import`) to achieve code spliting.

### `Lazy()`
1. The `lazy()` is a function that tells React to load a component only when it's needed.
2. it takes a function as an argument that must call `import()`
3. `import()` returns a Promsie which resolves to the component module.
4. React will not load that lazy component until the component is actually shown on screen.
### `Suspense`
1. `Suspense` is a React component that wraps lazy-loaded components.
2. It shows a fallback UI (like a spinner, message, etc.) while the lazy component is being loaded.
3. Without Suspense, React wouldn’t know what to show during the loading phase.
4. It takes a fallback componnet as props.
```JS
import { lazy, Suspense } from 'react';
const About = lazy(()=>import("./About"));
function App(){
    return(
        <div>
            <h1>Code Splitting with dynamic import</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <Profile />
            </Suspense>
        </div>
    )
}
```

### useCases
1. These is best to use in Routing to load each route/page only when visited.
2. It is used for Heavy compoents that are not needed during the initial render.
3. Modals/Dialog components, etc