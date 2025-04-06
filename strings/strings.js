const value = " stRings"; 
console.log(
    value.includes("ing"), // true
    value.indexOf("ing"), // 4
    value.startsWith("s"), //false
    value.endsWith("s"), // true
    value.toUpperCase(), // STRINGS
    value.toLowerCase(), //strings
    value.trim(), //"stRings"
    value.replace("s","x"), //xtRings
    value.replaceAll("s", "x"), // xtRingx
    value.concat("-js"),// stRings-js
    value.length, //8
    value.charAt(1), //s
    value.slice(1,3) //st
)