const API = "https://jsonplaceholder.typicode.com/posts"
// GET
async function getData(id=1){
    try{
        let response = await fetch(`${API}/${id}`)
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}


// POST
async function postData(){
    try{
        let res =  await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "userId": 111,
                "title": "test post",
                "body": "test post body",
                "id": 101
            })
        })

        let postedData = await res.json()
        console.log(postedData)
        console.log("posted data")
    }catch(error){
        console.log(error.message)
    }
}

// PUT
async function putData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "userId": 300,
                "title": "updated title",
                "body": "updated body",
                "id": 345
            })
        })

        const data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error.message)
    }
}

// PATCH

async function patchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": "updated title with patch",
            })
        })

        const data = await response.json();
        console.log(data)

    }catch(error){
        console.log(error.message)
    }
}

// DELETE
async function deleteData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: 'DELETE',
        })

        if (!response.ok) throw new Error("failed to delete");

    }catch(error){
        console.log(error.message)
    }
}


postData();
getData()
putData();
patchData();
deleteData()