function matrixAddition(a, b){
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

console.log(matrixAddition(
    [ [1, 2],
      [1, 2] ],
    [ [2, 3],
      [2, 3] ] ))