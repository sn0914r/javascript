## Protected Routing
1. In protected routing we can prevent users from accessing certain pages (like /dashboard) unless they are authenticated.
2. #### authentication vs authorization
    1. `authentication` is the process of verifying who the user is (like `public`, `admin`, etc).
    2. `authorization` comes after `authentication`, it defines what actions or pages the authenticated user is allowed to access. 
### Protected Component
1. The protected Component is a wrapper that checcks if the user is logged in before allowing access to certain pages.
2. it usually gets the login status from `props`, `context`, `local/session storage`.
3. if the user is `authenticated`, it renders the desired component else it redirects the user to a login page or another fallback route.
```JS
import { Navigate }  from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }){
    return isLoggedIn ? children : <Navigate to="/login"/>
}
```
```JS
<Route path="/dashboard" element={
    <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Dashboard/>
    </ProtectedRoute>
}/>
```
### Role based Authentication
1. Role-based authentication means restricting access to certain parts of your app based on the user's role (like admin, user, editor, etc.) — not just whether they are logged in.
```JS
import { Navigate } from 'react-router-dom'
function RoleProtectedRoute({ isLoggedIn, role, allowedRoles, children }){
    if (!isLoggedIn) return <Navigate to="/login"/>;
    if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized">;
    return children;
}
```