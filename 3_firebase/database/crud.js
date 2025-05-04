import { realtimeDB } from "../setup/setup.js";
import { ref, set, get, onValue, update, remove } from "firebase/database";

//CREATE
async function createUser(name, dataObject){
    try{
        await set(ref(realtimeDB, `users/${name}`), dataObject)
        console.log(name,"added successfully")
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

// createUser("sivananda", {
//     name: "siva", username: "siva123",
//     status: "active", address:{
//         city: "madanapalle",
//         pincode: 5035682
//     },
//     friends: ["bhAAi", "tiGor"]
// })

// READ
// get()
async function getUserSnapshot(){
    try{
        let snap = await get(ref(realtimeDB, "users/sivananda/address"))
        if(!snap.exists()) throw new Error("data doesn't exits")
        console.log(`key: ${snap.key}`);
        console.log(snap.val())
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

// getUserSnapshot();

// onValue

onValue(ref(realtimeDB, "users/sivananda/address"), (e)=>{
    console.log("data changed");
    console.log(e.val()) 
    // run this file and manually change the data in databse,
    // then this function will run, it’s working.
})

// UPDATE - update()

async function updateUsers(data) {
    try{
        await update(ref(realtimeDB, "users/sivananda/address"),data)
    }catch(error){
        console.log("error", error.message)
    }
}

// updateUsers({
//     city: "madanapalle", state: null
// })

// DELETE - remove()

async function removeUser(username) {
    try{
        await remove(ref(realtimeDB, `users/${username}`))
        console.log(`${username} deleted`)
    }catch(error){
        console.log(`error: ${error.message}`)
    }
}

removeUser("sivananda/friends/0")