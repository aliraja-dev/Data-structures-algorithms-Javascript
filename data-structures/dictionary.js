/**
 * In static typed languages like C++/C# we can store data in key value pairs where the keys are sorted and unique.
 * In JavaScript we dont have a primitive type for dictionary but we can implement it using objects.
 */

const dictionary = {};

// Add a key value pair to the dictionary
dictionary['key'] = 'value';
dictionary[1] = 'one';
dictionary[2] = 'two';
dictionary.name = "chris"
console.log(dictionary)

//accessing the value of a key
console.log(dictionary['key'])
console.log(dictionary[1])
console.log(dictionary.name)

//delete a key value pair
delete dictionary['key']
console.log(dictionary)

//check if a key exists
console.log('key' in dictionary)
console.log(1 in dictionary)
console.log('name' in dictionary)

//loop through the dictionary
for (let key in dictionary) {
    console.log(key, dictionary[key])
}