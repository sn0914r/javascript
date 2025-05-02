1. Arrays are used to store multiple data in a single variable.
2. We can access and modify the each element using the index numbers.

## Arrays creation
1. We can declare an array using the Array constructor
```JS
let array = new Array(size(optional))
```
2. We can declare an array using the square brackets ([])
```JS
let array = []
```

## Array methods
1. ```.fill()```:  when we create an array using the array constructor, we can use the ```.fill()``` method to fill the array with some static values.
```JS
let array = new Array(3).fill(0) // [0, 0, 0]
```

2.```.concat()```: To join two arrays and return a new array we can use the ```.concat()``` method.
```JS
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = array1.concat(array2) // [1, 2, 3, 4, 5, 6]
```
3. ```.length```: to get the size of an array we can use ```.length``` method, it returns the size.
```JS
let size = [1, 2, 3, 4].length //4
```

4. ```.indexOf()```: to get the index of first occurance of a particular element. If the elment exist then it returns the index else -1.
```JS
let index = [1, 2, 3, 4].indexOf(5) //-1
```

5. ```.lastIndexOf()```: similiar to ```.indexOf()``` method but it gets the the index of last occurance.
```JS
let index = [1, 2, 3, 3, 4].lastIndexOf(3) //3
```

6. ```.includes()```: it checks the if the give element exists in the array. It returns `true` if exists else `false`
```JS
let index = [1, 2, 3, 3, 4].includes(3) //true
```

7. ```Array.isArray()```: it is used to check if the data type is array or not. It returns `true` for arrays and `false` for remaining.
```JS
let isArray = Array.isArray([1, 2, 3, 3, 4]) //true
isArray = Array.isArray(100) //false
```
8. ```.toString()```: converts an array into string
```JS
let string = [1, 2,3,4, 5].toString() //"1,2,3,4,5"
```
9. ```.join()```: similat to ```.toString()``` but any value passed as argument will be replaced with commas. It takes comma as default.
```JS
let string1 = [1, 2, 3, 4].join() //"1,2,3,4"
let string2 = [1, 2, 3, 4].join(' $ ') //"1 $ 2 $ 3 $ 4"
```

10. ```slice()```: It is used to slice and return a part from an array. It accepts two arguments (starting and ending indeces)
```JS
let array = [10, 20, 30, 40, 50, 60, 70, 80];
array.slice() // [10, 20, 30, 40, 50, 60, 70, 80]
array.slice(1) // [20, 30, 40, 50, 60, 70, 80]
array.slice(1, 3) // [20, 30]
```

11. ```splice()```: It is used to remove and add elements into the list, It modifies the original list. It takes atleast one argument.
```JS
let array = [10, 20, 30, 40, 50, 60, 70, 80];
array.splice() // doesn't remove elements
array.splice(1) // removes elements from index 1( including element at index 1) + output: [10]
array.splice(1, 3) // it removes three elements from index 1 (including index 1)
array.splice(1, 3,100, 90, 80) // it removes three elements from index 1 (including index 1) and adds 100, 90, 80 from index 1
```

12. ```.push()```: adds element at the end of the array and returns its size
```JS
let array = [10, 20, 30, 40, 50].push(60) // returns 6 and array will be :[10, 20, 30, 40, 50, 60]
```

13. ```.pop()```: removes the last element and returns it
```JS
let array = [10, 20, 30, 40, 50].pop() // returns 50 and array will be :[10, 20, 30, 40, 50]
```

14. ```.shift()```: removes and returns the first element from the array
```JS
let array = [10, 20, 30, 40, 50].shift() // returns 10 and array will be :[20, 30, 40, 50]
```

15. ```.unshift()```: same as ```.push()``` but adds the element at the beginning
```JS
let array = [10, 20, 30, 40, 50].unshift(0) // returns 6 and array will be :[0, 10, 20, 30, 40, 50]
```

16. ```.reverse()```: reverses the order of the array (modifies the original one)
```JS
let array = [10, 20, 30, 40, 50]
array.reverse() //[50, 40, 30, 20, 10]
```

17. ```.sort()```: it sorts the numbers in ascending order and alphabets in alphabetical order.
```JS
let nums = [3, 1, 7, 2]
nums.sort() // [1, 2, 3, 7]

let names = ["siva", "bhAAi", "tiGor"]
names.sort() // ["bhAAi", "siva", "tiGor"]
```

