/**
 * To find the kth smallest element in an array, i.e. where k will be the position in sorted order, we can use the quick select algorithm. The position at which we want to find the number in the sorted order is provided as the second argument to the quick-select algorithm. The idea is to partition the array into two parts, one smaller than the pivot and one larger than the pivot. Then, we can recursively call quick select on the two parts. The time complexity of quick select is O(n) because it has to go through all the elements in the array.
 */

function quickSelect(arr, k) {
    if (arr.length === 0) {
        return null;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    if (k <= left.length) {
        return quickSelect(left, k);
    } else if (k > left.length + 1) {
        return quickSelect(right, k - left.length - 1);
    } else {
        return pivot;
    }
}

//! This returns the first element in the sorted order of the following array.
const result = quickSelect([1, 4, 2, 8, 345, -11, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92], 1);
console.log(result); //* -11 (the first element in the sorted order)