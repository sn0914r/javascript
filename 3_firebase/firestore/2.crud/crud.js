import { firestoreDB } from "../../../setup/setup.js";
import { collection, doc, addDoc, setDoc, getDocs, getDoc, query, where, limit, orderBy, updateDoc } from "firebase/firestore";

// CREATE
// addDOC
let collectionName = "cars";

async function addUser(data){
    try{
        const docRef = await addDoc(collection(firestoreDB, collectionName), data)
        console.log(`doc id: ${docRef.id}`) // id
        console.log(`doc collection: ${docRef.parent.id}`) // collection name
        console.log(`doc path: ${docRef.path}`) // collection name/id
    }catch(error){
        console.log(error.message)
    }
}

// addUser({
//     name: "harrier", color: "black", price: 20
// });

async function setUser(){
    try{
        const res = await setDoc(doc(firestoreDB, "cars", "TataCars"),{
            name: "Altroz", color: "yellow", price: 10
        })
        console.log(`value of setDoc: ${res}`) // undefined/null
    }catch(error){
        console.log("errorL: ", error.message)
    }
}

// setUser()

// READ
// getDocs()

async function getUsers(){
    try{
        const querySnapshot = await getDocs(collection(firestoreDB, collectionName));
        querySnapshot.docs.forEach(doc=>{
            console.log({
                id: doc.id,
                ...doc.data()
            })
        })
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

// getUsers()

// getDoc()
async function getUser(){
    const res = await getDoc(doc(firestoreDB, "cars", "TataCars"))
    if (res.exists()){
        console.log("ID exists");
        console.log(`id: ${res.id}`)
        console.log(res.data())
    }
}

// getUser()

// getDocs() + query() 
async function getCarsq(query){
    try{
        const querySnapshot = await getDocs(query);
        if(querySnapshot.empty){
            throw new Error ("empty")
        }
        querySnapshot.docs.forEach(doc=>{
            console.log({
                id: doc.id,
                ...doc.data()
            })
        })
        
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

// getDocs() + query() + where()
let q1= query(
    collection(firestoreDB, "cars"),
    where("price", "in", [15, 49, 3])
)
// getCarsq(q1)

// getDocs() + query() + where() + limit()
let q2 =  query(
    collection(firestoreDB, "cars"),
    where("price", ">", 30),
    limit(2)
)
// getCarsq(q2)

// getDocs() + query + orderBy
let q3 = query(
    collection(firestoreDB, "cars"),
    orderBy("price", "desc")
)
// getCarsq(q3)

// UPDATE with updateDoc
async function updateCars() {
    try{
        const car = await getDoc(doc(firestoreDB, collectionName, "TataCars"));
        if (car.exists()){
            console.log("before update: ")
            console.log(car.data())
            await updateDoc(car.ref, {
                color: "red"
            })
        }else{
            throw new Error ("doc not found")
        }
        
        const res = await getDoc(doc(firestoreDB, collectionName, "TataCars"));
        if (res.exists()){
            console.log("after update: ")
            console.log(res.data())
        }
    }catch(error){
        console.log(error)
    }
}

updateCars();

// DELETE with deleteDoc
