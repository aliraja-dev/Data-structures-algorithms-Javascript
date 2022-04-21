//* Insertion Sort
/**
 * Time complexity : O(n^2)
 * Space complexity : O(1)
 * Quadratic Time complexity means its not the best sorting algorithm and very expensive in terms of efficiency. It works by searching the array sequentially and moving the unsorted items into a sorted sub-list on the left side of the array.
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

const result = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(result);    