## Security Rules in Firebase
### What are Security Rules?
1. Security rules control who can read or write data in our database (or use storage, etc.).
2. we use some rules to restrict access based on conditions like `authentication`, `data values`, `paths`, etc.
3. we write this in `Firebase Console` -> `Realtime Database` / `Firestore` -> `Rules tab`

### setting the firebase rules - firebase Realtime Database
The following `keywords` are used to `restrict` or `allow` read and write operations in `firebase Realtime Database` based on certain conditions like user `authentication`.

#### `.read` & `.write`
1. These are the `main` keywords used to define the permissions for reading and writing to firebase Storage.
    1. `.read`: specifies who can `read` or `download` data from the database.
    2. `.write`: specifies who can `write` or `update` data in the database.

#### `.true` & `false`
1. the `true` & `false` are given as values to `.read` & `.write`
1. true: Grants permission unconditionally. For example, if you want everyone to have read access.

2. false: Denies permission unconditionally. For example, if you want to block access entirely.
```JSON
{
    "rules": {
        // no one can read or write data
        ".read": false, 
        ".write": false
    }
}
```

```JSON
{
    "rules": {
        // everyone can read or write data
        ".read": true, 
        ".write": true
    }
}
```
#### `null`
1. in Firebase rules, null refers to a `non-existent value` or `empty` value. It is used to check if something `exist` or `not`.

#### `auth`
1. The `auth` object refers to the `current authenticated user`.
    1. `auth.uid`: it is the `UID` of the currently authenticated user
2. this object is given as a value to `.read` & `.write`
```JSON
{
    "rules": {
        // it means only authenticated users can read and write data
        ".read": "auth !== null", 
        ".write": "auth !== null"
    }
}
```

```JSON
{
    "rules": {
        // it means only user with 1234 as uid can read and write 
        ".read": "auth.uid === 1234", 
        ".write": "auth === 1234"
    }
}
```


```JSON
{
    "rules": {
        // it means only users with 1234 or 5678 or 9101112 as uid can read and write 
        ".read": "auth.uid === 1234 || auth.uid === 5678 || auth.uid === '9101112'", 
        ".write": "auth.uid === 1234 || auth.uid === 5678 || 9101112"
    }
}
```

