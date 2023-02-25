function miniMaxSum(arr) {
    let sortedMin = arr.sort((a,b) => a - b)
    let minSum = sortedMin[0] + sortedMin[1] + sortedMin[2] + sortedMin[3];

    let sortedMax = arr.sort((a,b) => b - a)
    let maxSum = sortedMax[0] + sortedMax[1] + sortedMax[2] + sortedMax[3];

    return minSum + " " + maxSum
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));