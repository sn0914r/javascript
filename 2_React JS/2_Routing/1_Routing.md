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
### Dynamic Routing
1. Dynamic Routing allows us to show the samepage, but with different data like a user's profile, a blog post, or a product page.
2. Instead of creating many static routes like
```bash
/user/1
/user/2
/user/3
```
we can create onde dynamic route like:
```JS
<Route path="/user/:id" element={<User />}/>
// Here, :id is a placeholder for any value,
// it is called as params-short for parameters
```
3. So, Dynamic routing allows us to create routes that depend on dynamic values, such as a user ID, blog post ID, product name, etc.
4. `params` - The params are the dynamic values in a URL, They let a single component show different data based on the URL.
5. `useParams()`
    1. This hook allows us to access `params` in the current URL.
    2. It returns an object of params with values.
    ```JS
    <Route path="/dashboard/:userID/userName/:name" />
    // if current URl is : /dashboard/34562/userName/siva
    import { useParams } from 'react-router-dom';
    const params = useParams();
    console.log(params)
    /*
    output: 
        {
            userID : 34562,
            name : "siva"
        }
    */
    ```

### Passing State/data Between Routes/Components in Routing
We can share or pass data from component at one route to another component in another route in the following ways:
#### 1. Dynamic Routing
1. we can pass data to another component through URL using dynamic params segments like `:id`, `:name`, etc
```JS
<Route path="/user/:id" element={<User/>}/>

// navigating 
<Link to="/user/123" >Go to user</Link>

// receving the params
const { id } = useParams(); // id="123"
```
#### Passing state via Navigation
1. `<Link>`
```JS
<Link to="/profile" state={{name:"siva", msg:"hi"}}>Share</Link>
```
2. `<NavLink>`
```JS
<NavLink to="/profile" state={{name:"siva", msg:"hi"}}>Share</NavLink>
```
3. `useNavigate()`
```JS
import { useNavigate } from "react-router-dom"
const navigate = useNavigate();
navigate("/profile", { state: {name: "Siva", msg: "hi"} })
```
4. `Navigate`
```JS
import { Navigate } from 'react-router-dom';
<Navigate to="/login" state={{ from: "/dashboard", message: "Please login first" }}/>
```
##### `useLocation` Hook
1. The `useLocation()` hook is used to access the data passed via Navigation or Query parameters.
2. It returns an object containing the following properties:
    1. `pathname` - the current path/URL
    2. `search` - query parameters
    3. `state` - the data/state passed via navigation
    4. `hash` - fragment identifier (to scroll to a section on the page)
    5. `key` - It is a unique identifier (a random string) assigned by React Router to each navigation entry in the browser's history stack.
#### using `web Storages`
1. we can pass data from one route to another using `Session Storage` or `Local Storage` by saving the data before navigation and then reading it in the next route.
