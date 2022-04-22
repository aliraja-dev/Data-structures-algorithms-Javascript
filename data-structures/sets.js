/**
 * set: unordered collection of unique values
 * JS has built-in Set class, that allows us to create sets. And we can iterate over them in insertion order(FIFO principle). Can store primitive values or object references.
 * For more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * Time Complexity:
 * - add: O(1) -- add method
 * - remove: O(1) -- delete method
 * - contains: O(1) -- has method
 * - size: O(1) -- size method
 */

const mySet = new Set();
// we can store object references in a set
const arr1 = [1, 2, 3, 4, 5];
const func = function inASet() { console.log("I am in a set"); }

mySet.add(arr1).add(5).add(6).add(7);
mySet.add(func);
console.log(mySet);
console.log("Size of set is", mySet.size);
console.log("this set has 5 as an element?", mySet.has(5));
console.log("this set has 8 as an element?", mySet.has(8));

console.log("Delete [1, 2, 3, 4, 5] from the set", mySet.delete(arr1));
console.log("Size of set is", mySet.size);
console.log("Delete func from the set", mySet.delete(func));
console.log("Size of set is", mySet.size);

//! Iterating over a set
//* to loop thru the set values we can use for of loop
for (const value of mySet) {
    console.log("Using for off loop", value);
}

//* to loop thru the set values we can use forEach method, which takes a callback function as an argument and calls it for each element in the set in insertion order FIFO.
mySet.forEach(value => console.log("Using for each ", value));


//* to loop thru the set values we can use values method
const values = mySet.values();
// console.log("Using values method", values.next().value);
// console.log("Using values method", values.next().value);

for (const value of values) {
    console.log("Using for off loop, on iterator", value);
}

// (key and value are the same here)
for (let [key, value] of mySet.entries()) console.log("using entries method", key)

//! Relationship with other data structures: Arrays
// create a set from an array and vice versa
const arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
const set2 = new Set(arr2, 2, 3, 4);
console.log("Set from array", set2);
console.log("size of set 2", set2.size);

//! difference between add and new Set methods: add method adds the argument as a single element tot he set and the latter will add the arguments as individual elements and also check for uniqueness. 
//! To remove duplicate elements from an array we can use set method.
const arr3 = [1, 2, 2, 2, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
const set3 = new Set(arr3);
console.log("Set from array 3", arr3, "length of array", arr3.length, set3);

//TODO compare set.size and array.length to check for uniqueness of list of values
if (arr3.length != set3.size) {
    console.log(`The array 3 had ${arr3.length - set3.size} duplicate values`);
}
//* relationship with other data structures: Strings
// removes duplicate characters from a string

const text = "Hello World";
const set4 = new Set(text);
console.log("Set from string", "length of string", text.length, set4);

//TODO Intersection, union, difference, isSuperSet and symmetric difference functions