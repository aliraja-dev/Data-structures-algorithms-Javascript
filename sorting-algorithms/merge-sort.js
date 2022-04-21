


function merge(leftA, rightA) {
    var results = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if (leftA[leftIndex] < rightA[rightIndex]) {
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
        var leftRemains = leftA.slice(leftIndex),
            rightRemains = rightA.slice(rightIndex);
    }
    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}


function mergeSort(array) {
    if (array.length < 2) {
        // base case
        return array;
    }
    var middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
const result = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

console.log(result);