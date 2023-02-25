function rotate(matrix, direction) {
    const n = matrix.length;
    const grid = [];
    console.log(n)
    if(direction === "clockwise") {
        for(let i = 0; i < n; i++) {
            grid.push([]);
        }
        console.log(grid);

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                grid[i][j] = matrix[n - 1 - j][i];
            }
        }
        return grid;
    } else if(direction === "counter-clockwise") {
        for(let i = 0; i < n; i++) {
            grid.push([]);
        }

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                grid[i][j] = matrix[j][n - 1 - i];
            }
        }
        return grid;
    }
}

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(rotate(matrix, 'clockwise'));