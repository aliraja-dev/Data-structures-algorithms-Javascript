/**
 * JS has a built in sort function. We provide it with an comparator function to tell how to sort the incoming elements. If we dont provide it with a comparator function, it will sort the elements in ascending order assuming them as strings be default.
 */

//TODO add more sort algorithms here using JS built in sort function.
//TODO https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function inAscendingOrder(a, b) {
    return a - b; //* This will sort the elements in ascending order.
}

function inDescendingOrder(a, b) {
    return b - a; //* This will sort the elements in descending order.
}

var array1 = [1, 4, 2, 8, 345, -11, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(array1.sort(inAscendingOrder));