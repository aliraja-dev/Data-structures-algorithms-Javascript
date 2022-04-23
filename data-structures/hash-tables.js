/**
 * HASH TABLE
 * A fixed data structure in which we can store data in key value pairs where the keys are sorted and unique using a hash function. The size of the array is defined at the start though. A good has function has to provide unique keys efficiently and uniformly distribute they keys across the array.
 * Collisions do occur when the hash function produces the same hash for two different keys. And in order to solve for those we use linear(incrementing index by 1) and quadratic probing(using a quadratic function to increment the index), or double hashing (using multiple functions) and linear probing.
 * Time complexity:
 * Insertion: O(1)
 * Search: O(1)
 * Deletion: O(1)
 * Space complexity: O(n)
 */

function HashTable(size) {
    this.keys = Array(size);
    this.data = Array(size);
    this.size = size;
    this.limit = 0;
}

HashTable.prototype.hash = function (key) {
    let hash = 0;
    if (!Number.isInteger(key)) { throw new Error('Key must be an integer') }
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    //TODO implement a second hash function here
    return hash % this.size;

}



HashTable.prototype.put = function (key, data) {
    if (this.limit >= this.size) throw new Error('Hash table is full');
    let index = this.hash(key), squareIndex = 1;
    while (this.keys[index] !== undefined) {
        //* quadratic probing on the hash key received from the hash function
        index += Math.pow(squareIndex, 2);
        squareIndex++;
    }
    this.keys[index] = key;
    this.data[index] = data;
    this.limit++;
}

HashTable.prototype.get = function (key) {
    let index = this.hash(key), squareIndex = 1;
    while (this.keys[index] !== key) {
        //* quadratic probing on the hash key received from the hash function
        index += Math.pow(squareIndex, 2);
        squareIndex++;
    }
    return this.data[index];
}

HashTable.prototype.remove = function (key) {
    let index = this.hash(key), squareIndex = 1;
    while (this.keys[index] !== key) {
        //* quadratic probing on the hash key received from the hash function
        index += Math.pow(squareIndex, 2);
        squareIndex++;
    }
    this.keys[index] = undefined;
    this.data[index] = undefined;
    this.limit--;
}

const table1 = new HashTable(10);
table1.put(1, 'one');
table1.put(2, 'two');
table1.put(3, 'three');
table1.put(4, 'four');
table1.put(5, 'five');

console.log(table1.get(1));
table1.remove(4);
console.log(table1);
