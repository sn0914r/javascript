// Type conversion allows us to convert data from one type to another type.


/** Implicit Type conversion or Type Coercion:
 * Javascript automatically converts data type when needed.
 */
let result;
result = "5" + 3; // 3 is converted to string and concatenated
result = "5" - 2; // "5" is converted to number and results 3
result = true + 1 // true is converted to 1 and results 2
 

/** Explicit Type Conversion
 * User manually converts data from one type to another using casting operators.
 */

// string operators
String(123) // converts to string
console.log(typeof (123).toString()) // converts to string

// number operators
Number("123") // converts to number
parseInt("2.2") // converts to number + removes the decimal part
parseFloat("2.2") // converts to numbers + does not remove the decimal part

// Boolean Operators: any value passed to it except falsy values returns true
/** Falsy values in JS
 * false
 * 0 (zero)
 * -0 (negative zero)
 * "" (empty string)
 * null
 * undefined
 * NaN (Not a Number)
 */
Boolean(2) // true
Boolean("") // false