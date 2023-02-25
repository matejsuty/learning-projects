function secondLargestPerimeter (triangles) {
    let map = {};

    if (triangles.length < 2) {
      return -1;
    }

    for (let i = 0; i < triangles.length; i++) {
      let currentSum = 0;
      for (let j = 0; j < triangles[i].length; j++) {
        currentSum += triangles[i][j];
      }
      map[currentSum] = i;
    }
    let sortedArray = Object.entries(map).sort((a,b) => b[0] - a[0]);
    return sortedArray[1][1];
}
  
console.log(secondLargestPerimeter([5,7,2],[4,4,4],[6,6,6]));