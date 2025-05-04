## Authentication
### What is authentication?
1. `Authentication` is the process of verifying a user's identity by checking the credentials they provide, such as a password, email, or token.
2. If those credentials match what's stored in the system, the user is authenticated and allowed access to do something.
3. If those credentials don't match then the user is not authenticated and the access is denied to do somthing.

#### Real world example:
Authentication is like a watchman at the college gate. When you show your ID card, and if your face matches the one on the card, you are authenticated to enter the campus. If the faces don’t match, then you are not authenticated and are not allowed to enter.

### Authentication in Firebase
1. To enable authentication in firebase we need to import `getAuth()` function from `firebase/auth`
2. The `getAuth()` function returns an instance of the authentication system that lets you handle `login`, `signup`, and `access user details (like name, email, etc.)`
```JS
const authentication = getAuth(app)
export { authentication }
```
3. Some the Firebase Authentication methods: 
    1. Email and Password
    2. Google Sign-In
    3. GitHub Sign-In
    4. Facebook Sign-In
    5. Twitter Sign-In
    6. Phone Number Authentication and more

#### NOTE: before using the above the authenticatinon methds, we must enable authentication in firebase console

## Google authentication in firebase

### SignUp / Login with Google
1. First we need to import the `GoogleAuthProvider()` class from firebase's auth module( `firebase/auth`)
2. this class handles Google authentication, and you need to create an instance of this class.

    ```JS
        const googleProvider = new GoogleAuthProvider();
    ```
3. This instance tells Firebase that we want to use Google as the authentication method.
4. we pass this `instance` to the `signInWithPopup()` function along with the `authentication` instance retured by `getAuth()` method

    ```JS
    await signInWithPopup(authentication, googleProvider)
    ```
5. When we call `signInWithPopup()`, Firebase opens a popup with the provider’s login/sign-up page (like Google), where the user can sign in or sign up.

6. the `signInWithPopup` returns a promise:
    1. on `resolve` - returns a `UserCredential` object.
    2. on `rejection` - returns an `error object` 
7. `UserCredential` object contains
    1. `user`: the signed-in user's info
    2. `providerId`: the provider used (like `google.com`, `github.com`, etc)
    3. `accessToken`, `idToken`, etc
8. the `user` object contains:
    1. `uid`: unique user ID
    2. `displayName`: user's nmae
    3. `email`: Email ID
    4. `photoURl`: Profile photo URL
    5. `emailVerified`: Boolean value , etc
9. At the same time, the `authentication` instance (`from getAuth()`) will automatically hold the current user's information under `authentication.currentUser`.
10. when user didnt log in or signed out, the `authentication.currentUser=null`, when logged in `authentication.currentUser` contains the user's information.
Example:
```JS
{
  uid: "216545617736128",// unique firebase user ID
  email: "sivanandareddy@gmail.com",
  displayName: "Sivananda",
  photoURL: "https://pic.url",
  emailVerified: true,
  phoneNumber: null,
  providerData: [ ... ] // which provider (Google, GitHub etc.)
}
```

### `onAuthStateChanged()`
1. `onAuthStateChanged()` is a `listener` provided by firebase, that listens to the `authentication state` using the `getAuth()` `instance`.
2. It takes two arguments:
    1. `authentication` instance (returned by `getAuth()`)
    2. `callback` fn, the callback gets the current `user object` `if logged in`, or `null` `if signed out`.
3. The callback runs:
    1. `Immediately` when the listener is set up.
    2. `Every time` the user `logs in` or `signs out`.
4. it returns an `unSubscribe` funtion, which can be used to stop listening.
```JS
const unsubscribe = onAuthStateChanged(auth, (user) => {
  // callback body
});

// later if needed to stop listening
unsubscribe();

```

### Signout
1. To sign out a user in Firebase Authentication, use the `signOut()` function.
2. It takes the `instance` returned by `getAuth()` as argument.
3. When `signOut()` is called, it logs out the user (if logged in) and returns a promise:
    1. On `resolve`: returns `void`.
    2. on `rejection`- it returns the `error` object
```JS
const result = await signOut(authentication);
console.log(result); // undefined if succesfull
```

#### Note 
1. the `github`, `facebook`, `twitter` authentication is also same as `google`, the only difference is there `providers`
2. Providers:
    1. `github`: `GithubAuthProvider()`
    2. `facebook`: `FacebookAuthProvider()`
    3. `twitter/x`: `TwitterAuthProvider()`

## Authentication with Email & Password
### Signup/ register
1. we use the `createUserWithEmailAndPassword()` method to provide authentication via email&password
3. it takes three main arguments:
    1. `authentication instance` by `getAuth()`
    2. `emailID`
    3. `password`
4. the `createUserWithEmailAndPassword(authentication, email, password)` returns a promise:
    1. on `resolve`-  returns `userCredential` object that contains user's data (`userCredential.user`)
    2. on `rejection`- throws the `error object`.
```JS
async function signUp(email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(authentication, email, password);
        console.log("user signed up")
        console.log(`user email: ${userCredential.user.email}`) // logs user email
    }catch(error){
        console.log(error.message)
    }
}
```
### sign in / login
1. we use `signInWithEmailAndPassword()` method to login via email & password.
2. `signInWithEmailAndPassword()` takes three main arguments: 
    1. `authentication instance` by `getAuth()`
    2. `email ID`
    3. `password`
3. `signInWithEmailAndPassword(authentication, email, password)` returns a promise:
    1. on `resolve`-  returns `userCredential` object that contains user's data (`userCredential.user`)
    2. on `rejection`- throws the `error object`.
```JS
async function signIn(email, password){
    try{
        const userCredential = await signInWithEmailAndPassword(authentication, email, password);
        console.log("user signed in")
        console.log(`userEMail : ${userCredential.user}`)
    }catch(error){
        console.log(error.message)
    }
}
```

### signout / logout
1. To sign out a user in Firebase Authentication, use the `signOut()` function.
2. It takes the `instance` returned by `getAuth()` as argument.
3. When `signOut()` is called, it logs out the user (if logged in) and returns a promise:
    1. On `resolve`: returns `void`.
    2. on `rejection`- it returns the `error` object
```JS
const result = await signOut(authentication);
console.log(result); // undefined if succesfull
```
