function simpleArraySum(ar) {
    let sum = 0;
    ar.map(number => {
        sum += number;
    })
    return sum;
}