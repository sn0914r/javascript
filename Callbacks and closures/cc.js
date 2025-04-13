// callback funtions
const getFullName=(fname, lname)=>`${fname} ${lname}` // callback fn

function greetUser(callback, fname, lname){ // normal fn that takes a callback is arg
    console.log("Hello", callback(fname, lname))
}

greetUser(getFullName, "sivananda", "reddy")

// clousers
function useMap(){
    const mymap= new Map();
    function print(){
        console.log(mymap);
    }
    function add(key, value){
        if (typeof key !== 'string'){
            console.log("accepts only strings");
            return
        }
        mymap.set(key, value);
    }
    function dlt(key){
        mymap.delete(key)
    }
    function update(key, value){
        if (!mymap.has(key)){
            console.log("key doesn't exist");
            return
        }
        mymap.set(key, value);
    }
    function read(key){
        if (!mymap.has(key)){
            console.log("key doesn't exist");
            return
        }
        console.log(mymap.get(key));
    }

    return {
        add, dlt, update, read, print
    }
}

const clousers = useMap();
const { add, dlt, update, read, print } = clousers;
add("venu", "snake1")
add("sundeep","snake2")
print()
dlt("sundeep")
print()
read("venu")
update("venu", "bhAAi")
print()