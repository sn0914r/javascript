## Memorization with `React.memo`, `useMemo` and `useCallback`
### `React.memo`
1. React.memo is a higher-order component used to prevent unnecessary re-renders ( comparisions during reconcilation) of functional components.
2. It only re-renders the component if its props changes. (`only props not state`)
3. It is useful when a child component is getting props from parent and the child is pure (output depends only on props).
```JS

import React from "react";

function MyComponent({ name }){
    console.log("Rendered:", name);
    return(
        <div>
            Hello, { name }
        </div>
    )
}

// this component only re-renders if name prop changes.
```

### `useMemo`
1. `useMemo` is a hook that memoizes a computed value and recalculates it only when dependencies change.
2. It improves performance by avoiding costly calculations on every render.
### `useCallback`
1. `useCallback` is a hook that memoizes a function, so it doesn’t get recreated on every render.
