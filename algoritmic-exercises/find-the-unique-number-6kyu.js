function findUniq(arr) {
    const sortedArr = arr.sort((a,b) => b - a);

    if(sortedArr[0] === sortedArr[1]) {
        return sortedArr[sortedArr.length - 1];
    } else if(sortedArr[1] === sortedArr[2]) {
        return sortedArr[0];
    }
}

console.log(findUniq([1,1,1,1,0.5,1,1]));