function sum(matrix) {
    let principal = 0, secondary = 0;
    for (let i = 0; i < matrix.length; i++) {
        principal += matrix[i][i];
        secondary += matrix[i][matrix.length - i - 1];
        return principal + secondary;
    }
}