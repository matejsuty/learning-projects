function squareDigits(num){
    let myArr = String(num).split('').map(num => {
        return Number(num);
    })
    let result = "";
    for (let i = 0; i < myArr.length; i++) {
        result += myArr[i] * myArr[i];
    }
    return Number(result);
}

console.log(squareDigits(3212));