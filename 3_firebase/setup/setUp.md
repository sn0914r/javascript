### import { initializeApp } from "firebase/app";
1. This statements imports the `initializeApp` from  `Firebase SDK`.
2. This function allows to setup our firebase project and allows firebase services like `Firebase`, `Authentication`, etc
3. It takes our `configuration object` as an arg. i.e.,
```JS
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};

```
```JS
const  app = initializeApp(firebaseConfig)
```
Here it `initialises` the firebase app with our `firebaseCOnfig`

in the statement `const app = initializeApp(firebaseConfig)` app variable gets the instance of firebase app, by using this we can access firebase services like `firestore`, `authentication`, etc