import { authentication } from "../setup/setup.js";
import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

//listener
onAuthStateChanged(authentication, user=>{
    if (user){
        console.log(`email (from OnAuthStateChanged): ${user.email}`)
    }else{
        console.log("from OnAuthStateChanged: no user logged in or user signed out")
    }
})

// signup
async function signup(email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(authentication, email, password);
    }catch(error){
        console.log(`error at signup fn: ${error.message}`)
    }
}

// signup("reddysivananda80@gmail.com", "siva80")

//signout
async function signout() {
    try{
        await signOut(authentication)
    }catch(error){
        console.log(`error at signout fn: ${error.message}`)
    }
}

// signout()

// signin
async function signin(email, password) {
    try{
        await signInWithEmailAndPassword(authentication, email, password)
    }catch(error){
        console.log(`error from signin fn: ${error.message}`)
    }
}

// signin("reddysivananda80@gmail.com", "siva80")