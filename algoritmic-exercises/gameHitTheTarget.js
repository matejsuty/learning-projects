const solution = mtrx => {
    let arrowRow, arrowCol;

    for (let i = 0; i < mtrx.length; i++) {
      for (let j = 0; j < mtrx[i].length; j++) {
        if (mtrx[i][j] === '>') {
          arrowRow = i;
          arrowCol = j;
          break;
        }
      }
    }
  
    for (let i = arrowRow; i < mtrx.length; i++) {
      for (let j = arrowCol + 1; j < mtrx[i].length; j++) {
        if (mtrx[i][j] === 'x') {
          return true;
        }
      }
      arrowCol = 0;
    }
  
    return false;
}