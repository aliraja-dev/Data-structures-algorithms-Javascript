//* Bubble Sort
/**
 * Time complexity : O(n^2)
 * Space complexity : O(1)
 * Worst sorting algorithm : iterates over the entire array and swaps the elements if one is bigger than the other. Due to the nature of the algorithm, the two for loops result in a quadratic time complexity.
 */

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

const result = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(result);