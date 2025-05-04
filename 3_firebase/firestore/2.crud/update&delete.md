## UPDATE & DELETE

### `updateDoc()`
1. to update a document in a collection we use `updateDoc` method.

2. it takes two main args:
    1. `document reference` by `doc()` function
    2. `data object`:

3. if the document doesn't exist then updateDoc `throws an error`.

4. it does `not overwrite` the entire document (unlike `setDoc()` without merge). if the field doesn't exist, it will be created.

5. `updateDoc()` returns a `promise` which is then resolved into `void`.
```JS
await updateDoc(doc(firestoredB, "cars", "TataCars"),{
    color: "red" 
})
```

### `deleteDoc()`
1. the `deleteDoc`method allows us to delete a document from a collection.

2. It takes a single arg i.e., the document referance retured by `doc()` method.

3. if the document doesn't exist then `deleteDoc` throws an error.

4. `deleteDoc` returns a promise that resolves into void.
```JS
await deleteDoc(doc(firestoredB, "cars", "TataCars"))
```