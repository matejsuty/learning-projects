function getMatrix(number) {
    let matrix = [];
    for (let i = 0; i < number; i++) {
        let row = [];
        for (let j = 0; j < number; j++) {
            row.push(i === j ? 1 : 0);
        }
        matrix.push(row);
    }
    return matrix;
}

console.log(getMatrix(10))