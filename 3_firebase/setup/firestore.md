### firestore setup
1. To use Firestore, first we need to import it from firebase:
```JS
import { getFirestore } from "firebase/firestore";
```
2. This statement imports the `getFirestore()` function from Firebase SDK which is important `to initilize firestore` in our app;

3. To connect the firestore we must pass our `app` instance(`in setup.js file`) as an arg to the `getFirestore()` func.

4. The `getFirestore()` returns an instance that provides access to all the databse related functions.

5. We then export this instance and import it wherever needed to create, read, update, or delete data from Firestore.