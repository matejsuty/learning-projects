function findOdd(A) {
    let result = "";
    let num = 0;
  
    A = A.sort();
    for (let i = 0; i <A.length; i++) {
      if(A[i] === A[i+1]) {
        num++;
      } else {
        num++;
        if(num % 2 !== 0) {
          result = A[i];
          break;
        }
      }
    }
    return result;
}

console.log(findOdd([1,1,2]));