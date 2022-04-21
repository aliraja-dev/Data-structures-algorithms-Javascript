/**
 * This algorithm works by counting the occurrences of each number element in the array and then creates a new array using those occurrences. Use case to sort integers with a limited range.
 * Time complexity: O(n + k) where n is the number of elements in the array and k is the range of the numbers.
 * Space complexity: O(k)
 */

function countSort(arr, max) {
    let counts = new Array(max + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    let sorted = [];
    for (let i = 0; i < counts.length; i++) {
        while (counts[i] > 0) {
            sorted.push(i);
            counts[i]--;
        }
    }
    return sorted;
}

const result = countSort([1, 4, 2, 8, 345, -11, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92], 100);

console.log(result);