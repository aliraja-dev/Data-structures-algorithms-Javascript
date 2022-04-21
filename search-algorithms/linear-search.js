function linearSearch (array, searchValue){
    for (i=0; i<array.length; i++){
        if (array[i] == searchValue){
            return i;
        }
    }
    return -1;
}

const result = linearSearch([1,2,3,4,5,6,7,8,9,10], 5);
console.log(result);