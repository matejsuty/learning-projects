function diagonalDifference(arr) {

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr[0].length; i++) {
        leftSum += arr[i][i];
        rightSum += arr[i][arr[0].length-1-i];
    }

    return (Math.abs(leftSum - rightSum));
}