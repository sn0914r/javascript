1. String is a sequence of characters encloused within quotes.
2. Strings are immutable and indexed.

### string methods
1. `.includes()`: checks if a string contains a substring and returns a `boolean`.
```JS
"hello".includes("h") //true
```

2. `.indexOf()`: returns the first index of substring
```JS
"hello".indexOf("ll") //2
```

3. `.startsWith()`: returns true if the string starts with given substring.
```JS
"hello".startswith("he") //true
```

4. `.endsWith()`: returns true if the string ends with given substring.
```JS
"hello".endswidth("o") //true
```

5. `.toUpperCase()`: returns the uppercase string.
```JS
"hello".toUpperCase() // HELLO
```

6. `.toLowerCase()`: returns the lowercase string.
```JS
"HeLLo".toLowerCase() // hello
```

7. `.trim()`: removes the whitespaces at start and ending and returns the string.
```JS
" hello ".trim() // hello
```

8. `.replace(searchvalue, newValue)`: replaces a substring with the given substsring and returns a new string. `ONLY AT FIRST OCCURANCE`
```JS
"hi world hi world".replace("hi", "hello") // hello world hi world
```

9. `.replaceAll(searchvalue, newValue)`: replaces a substring with the given substsring and returns a new string. `AT ALL OCCURANCE`
```JS
"hi world hi world".replaceAll("hi", "hello") // hello world hello world
```

10. ```.split(separator, limit(optional))``: It is used to split a string into array. Its better for converting csv data into arrays.
```JS
let array = "1, 2, 3".split(",") //[1, 2, 3]
let array2 = "1-2-3-4". split("-", 2) //[1, 2]
```

11. ```join(separator)```: joins an array into string.

12. ```.concat()```: concats two strings and returns the output

13. ```.length```: returns number of characters in string.

14. ```charAt(index)```: returns the character at specific index.

15. `.slice(start, end)`: returns the slice of string