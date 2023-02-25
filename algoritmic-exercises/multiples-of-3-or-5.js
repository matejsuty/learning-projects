function solution(number){
  let resultArray = [];
  for (let i = 1; i < number; i++) {
      if(i % 3 == 0 || i % 5 == 0) {
        resultArray.push(i);
        }
  }
  return resultArray.reduce((a,b) => a + b, 0);
}

console.log(solution(95));