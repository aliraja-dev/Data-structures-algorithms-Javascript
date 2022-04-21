// Two ways to implement binary search:
// 1. Recursive Pattern
// 2. Iterative Pattern
//! Recursive Pattern: We first setup a base case which is the stopping condition for the recursion. Then we can use recursion to find the target in the array/ list.

const recursive_binarySearch = (arr, start, end, target) => {
    if (end >= start) {
        let mid = start + Math.floor((end - start) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == target)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > target)
            return recursive_binarySearch(arr, start, mid - 1, target);

        // Else the element can only be present
        // in right subarray
        return recursive_binarySearch(arr, mid + 1, end, target);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

// Iterative Pattern: We use a while loop to iterate through the array/ list.

function iterative_binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
console.log(`Using Iterative Binary Search index for 7 in ${arr} is ${iterative_binarySearch(arr, target)}`);
console.log(`Using Recursive Binary Search index for 7 in ${arr} is ${recursive_binarySearch(arr, 0, arr.length - 1, target)}`);

