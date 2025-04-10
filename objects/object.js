const nl="\n"
//creating objects
const objLiteal = { name: "abc" }

const newObject = new Object()
newObject.name="xyz"

function ObjConsFn(name){
    this.name = name;
}
const obj = new ObjConsFn("siva");

console.log(
    nl,
    "with object literal: ", objLiteal,
    nl,
    "with new & Object: ", newObject,
    nl,
    "with constructor func: ", obj
)

// object methods
function objConstructor(
    name="TATA Harrier",
    color="Black",
    type="SUV",
    otherCars=["Tigor", "Safari"]

){
    this.name = name,
    this.color = color,
    this.type = type,
    this.otherCars = otherCars
}
const object = new objConstructor()

// getting keys, values and entries
console.log("Object keys: ", Object.keys(object))
console.log("Object values: ", Object.values(object))
console.log("Object entries: ", Object.entries(object))

// object copying
const copyOfobject = Object.assign({}, object)
copyOfobject.name = "Altroz", // modifes the copy only
copyOfobject.type="Hatchback", // modifies the copy only
copyOfobject.otherCars.push("Nexon") // modifies the orignal too

console.log("copy: ", copyOfobject)
console.log("original: ", object)

// adding restrictions with freez and seal
const objectFreez = Object.freeze(new objConstructor())
objectFreez.name = "Altroz" //ignored
objectFreez.type = "Hatchback" // ignored
objectFreez.newProperty = "newValue" // ignored
objectFreez.otherCars.push("Nexon") // not ignored
console.log("freezed object: ", objectFreez)

const objectSeal = Object.seal(new objConstructor())
objectSeal.newProperty = "newValue" // ignored
objectSeal.name="Altroz" // not ignored
objectSeal.type="Hatchback"// not ignored
objectSeal.otherCars.push("Nexon") // not ignored
console.log("sealed object: ", objectSeal)

//checking for props with hasOwn
const newObj = new objConstructor()
console.log(
    "is newObj has 'age' property: ",Object.hasOwn(newObj, "age"),
    nl,
    "is newObj has 'name' property: ",Object.hasOwn(newObj, "name"),
)

// converting entries to an object with object.entries method
const entries=[
    ["name", "siva"],
    ["collegeName", "SISTK"]
]
const eObj = Object.fromEntries(entries);
console.log("entries to objj: ", eObj)