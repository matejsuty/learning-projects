function highAndLow(numbers) {
    const splittedArray = numbers.split(" ");
    const parsed = splittedArray.map(Number);
    const maxNumber = Math.max(...parsed);
    const minNumber = Math.min(...parsed);
    return `${maxNumber} ${minNumber}`;
}

highAndLow("1 2 3");