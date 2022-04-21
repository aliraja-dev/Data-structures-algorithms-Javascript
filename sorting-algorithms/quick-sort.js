//* Quick Sort
/**
 * Time complexity : O(n log n) -- Average and for Worst case O(n^2)
 * Space complexity : O(log n)
 * Again, in the worst case it will have a quadratic time complexity. But in the average case it will be O(n log n). This is best for use cases where average performance is more important than the worst case.
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const result = quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(result);