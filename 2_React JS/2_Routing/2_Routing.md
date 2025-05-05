## Routing 
1. The Routing allows us to display various components or pages based on the current URL path.
2. To use Routing we need to install the `react-router-dom` library using the following npm command:
```JS
npm install react-router-dom
```

### Main components in `react-router-dom`
1. `<BrowserRouter>`
    1. This is the main wrapper that enables routing in our app.
    2. we should wrap our entire app component inside it.
    ```JS
    import { BrowserRouter } from 'react-router-dom';
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ```
2. `<Routes>` and `<Route>`
    1. `<Routes>` component is a container for all our `Route`s.
    2. `<Route>` component is used to define individual route, it takes two main props:
        1. `path`: the `URL` path
        2. `element`: the component to render when the path matches
    ```Js
    import { Routes, Route } from 'react-router-dom'
    
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
    </Routes>
    ```

### Navigation with `<Link>` and `<NavLink>`
1. These components are used for navigation without refreshing the page
2. `<Link>`: 
    1. These component uses the `to` prop to define the target path.
    2. When a `<Link>` is clicked, it changes the URL to the given path. Then, the `<Routes>` component checks if any of its `<Route>` paths match the new URL. If a match is found, it renders the corresponding component.
    ```JS
    import { Link } from 'react-router-dom';

    <Link to="/home" >Home</Link>
    ```
    `<NavLink>`:
    1. It works similar to `<Link>` and props are same as `<Link>`, but it automatically applies an `active` class when the link matches the current `URL`.
    2. it's useful if we want to style the active route links in navbars, etc.
    ```JS
    import { NavLink } from 'react-router-dom';

    <NavLink to="/home">Home</NavLink>
    ```
#### points to remember:
1. if we give path like `to="profile"`, it appends it to the current url like `dashboard/profile` and it is called `Relative path` because it is relative to current path.
2. if we give path like `to="/profile"`, it overwrite the URL like `/profile` and it is called `Absolute path`.

### Nested Routing
1. Nested routing allows us to define routes inside other routes, making URLs more structured.
2. It is useful when we want to show different components inside a parent component without reloading the page.
```JS
<Route path="/dashboard" element={<Dashboard>}>
    <Route path="profile" element={<Profile/>}/>
    <Route path="settings" element={<Settings/>}/>
</Route>
/*
Here,

1. /dashboard => shows the <Dashboard> component
2. /dashboard/profile => shows the <Dashboard> component and <Profile> component inside it.
3. /dashboard/settings => shows the <Dashboard> component and <Settings> component inside it.

Here, the <Dashboard> is like the parent component,
 and <Profile> and <Settings> are its child components

note: the path in child routes should be relative
*/
``` 
3. `<Outlet>`: These component is a placeholder for all the child components
 of the parent component.
4. The `<Outlet>` component must be placed inside the parent component where you want the nested components to appear.
```JS
import { Outlet, Link } from 'recat-router-dom';

function Dashboard(){
    return(
        <div>
            <h2>Dashboard Page</h2>
            <Link to="profile">profile</Link>
            <Link to="settings">settings</Link>

            <Outlet> {/* child components (like Profile/Settings) will be shown here*/}
        </div>
    )
}
```
```JS
/*
    1. when the URL is /dashboard, it shows the Dashboard component, <Outlet> is empty
    2. when the URL is /dashbaord/profile or /dashboard/settings it shows the respective componet inside <Outlet/> component.
*/
```
