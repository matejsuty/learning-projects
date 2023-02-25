function orderWeight(strng) {
    const splitted = strng.split(" ");
    const sumNumber = splitted.map(number => {
        const splittedNumber = number.split('').map(Number);
        let initialValue = 0;
        const sumNumbers = splittedNumber.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        return sumNumbers;
    })
    return sumNumber.sort((a,b) => b-a).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));