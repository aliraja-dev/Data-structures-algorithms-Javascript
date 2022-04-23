/**
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
 * Built in JS Map, for more information:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * Unlike objects in JS who have a prototype, thus default keys come with them, Maps doesn't contain any keys, only contains what is explicitly put into it.
 * Keys in a map can be of any type, objects function or primitives.
 * Keys are kept in insertion order, so the first key inserted is the first key in the map, and the last key inserted is the last key in the map. And thats how they are returned too in the forEach loop.
 * Time Complexity:
 * Insertion: O(1)
 * Searching: O(1)
 * Deletion: O(1)
 * Access: O(1)
 * size: O(1)
 * Performs better with frequent additions and removals of key-value pairs.
 * Correct way to store data in a map is to use the set(key, value) method.
 */

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap.get('key1'));
console.log(myMap.size);

console.log(myMap.has('key1')); // true

myMap.delete('key1');
const iterableForMap = myMap.keys()
for (let key of iterableForMap) {
    console.log(myMap.get(key));
}

myMap.forEach((value, key) => {
    console.log(key, value);
});

for (const [key, value] of myMap) {
    console.log("Using for of loop", key, value);
}

//! Converting a Map to an Array & vice versa
const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap2 = new Map(kvArray)

console.log("After converting array to map", myMap2.get('key1')) // returns "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log("Convert Map to array using Array.from()", Array.from(myMap2))

// Will show you exactly the same Array as kvArray
// A succinct way to do the same, using the spread syntax
console.log("Convert to array using Array literal", [...myMap2])

// Or use the keys() or values() iterators, and convert them to an array
console.log("Array.from(map.keys())", Array.from(myMap2.keys())) // ["key1", "key2"]

//TODO Maps merge and clones -- mdn docs