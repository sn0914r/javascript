## CRUD Operations in Firestore

### READ
Firebase provides two methods to get data from documents:

#### `getDocs()`
1. the `getDoc()` is used to fetch multiple `documents` from a `collection`.

2. it takes one main arg i.e, `collection referance` returned by `collection()`

3. the `getDocs()` returns a `QuerySnapshot` which is like an object.
4. Inside `QuerySnapshot` there is an important prop called `.docs`, which is an array of documents.
5. each item in `.docs` is a `DocumentSnapshot` (just like an object) and each `DocumentSnapshot` contains one main prop and method called `.id` & `.data()`.
    1. `.id`: this prop returns the `id` of the document
    2. `.data()`: this method returns the `data object`
```JS
let querySnapShot = await getDocs(collection(firestoreDB, "cars"));
let array = querySnapshot.docs // get the array with documentSnapshots
array.forEach(doc=>console.log({id: doc.id, ...doc.data()})) // logs id and data in object form
```

#### `getDoc()`
1. The `getDoc()` is used to fetch a single document from firestore.

2.  It returns a `DocumentSnapshot` directly (not a QuerySnapshot like getDocs()).

3. the `getDoc()` takes the document referance returned by `doc()` function as an arg.

4. `documentSnapshot.exists()` is a method that is used to check if the document exists or not and it returns a `boolean`.

5. if the document ID doesn't exist, `snapshot.id` returns the provided ID, `snapshot.exists()` returns `false`, `snapshot.data()` returns `undefined`, but you can still access the snapshot.ref for the document reference
```JS
let documentSnapshot = await getDoc(doc(firestoreDB, "cars", "TataCars"));
if (documentSnapshot.exists()){ // checks if document exists
    console.log(documentSnapshot.data()) // logs the data
    console.log(documentSnapshot.id) // logs the document id
} 
```

#### handling the documents using `where()`, `orderBy()`, `limit()`
1. `query()` is a function provided by firebase/firestore, this method allows us to filter, sort and limit the doucments.
2. `query()` taks two main args:
    1. `collectionReferance`: by `collection()`
    2. `query constraints` like `where()`, `limit()`, `orderBy()`
```JS
let q = query(
    collection(firestoreDB, "cars"),
    // constraints
    collection(firestoreDB, "cars"),
    where("price", ">", 30),
    orderBy("price", "desc"),
    limit(5)
)
```

##### `where()`
1. this method `filters` documents based on field values.
2. this function takes three main args:
    1. `field name`
    2. `operator`: 
        1. `==`: equals
        2. `>`: greater than
        3. `<`: lessthan
        4. `>=`: greater than or equal to
        5. `<=`: less than or equal to
        6. `array-contains`: if field is an array, checks if it contains a specific value.
        7. `array-contains-any`: same as `array-contains` but it's for checking multiple values
        8. `in`: Used to check if a field value (not an array) is in a list of given values
    3. `value`: The value to compare the field.
4. this `where()` method is passed as an arg to the `query()` function.
```JS
let q = query(
    collection(firestoreDB, "cars"),
    where("price", ">", 30) // gets all docs with price greater than 30
)
```

##### `orderBy()`
1. this method `orders` documents based on numeric field values.
2. this function takes two main args:
    1. `field name`
    2. `desc` or `asc`: 
        1. `desc`: it sorts the collection by the given `fieldName` in `descending order`
        2. `asc`: it sorts the collection by the given fieldName in `ascending order`. If no direction is mentioned, Firestore uses `ascending order` by `default`.
```JS
let q = query(
    collection(firestoreDB, "cars"),
    where("price", ">", 30),
    orderBy("price", "desc") // orders the docs in descending order by price
)
```
        
#### `limited`
1. this function limits maximum number od documnets returned from a collection query.
2. this function takes a `number` as arg.
```JS
let q = query(
    collection(firestoreDB, "cars"),
    where("price", ">", 30),
    orderBy("price", "desc"),
    limit(5) // gets only 5 documents
)
```

##### Note: we can pass any number of query contraints into the query function