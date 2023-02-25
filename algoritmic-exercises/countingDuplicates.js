function duplicateCount(text) {
    let count = 0;
    const prepared = text.toLowerCase().split('').sort();
    console.log(prepared);
    prepared.map(letter => {
        if(prepared[letter] !== prepared[letter + 1]) {
            return count++;
        }
    })
    return count;
}

console.log(duplicateCount("ababcde"));