function birthdayCakeCandles(candles) {
    let maxNumber = Math.max(...candles);
    let sortedCandles = candles.sort((a,b) => b - a);
    console.log(sortedCandles);
    let count = 1;
    for (let i = 0; i < sortedCandles.length; i++) {
        if(sortedCandles[i] === sortedCandles[i+1] && sortedCandles[i] === maxNumber) {
            count++;
        }
    }
    return count;
}


console.log(birthdayCakeCandles([3,3,3,1,2,2,1,1,1,3]));