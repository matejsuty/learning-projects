function order(words) {
    const result = [];
    if(words === "") {
        result = words;
        return result;
    } else {
        const splittedWords = words.split(" ");
        let wordCount = 1;
        for(let i = 0; i < splittedWords.length; i++) {
            if(splittedWords[i].includes(wordCount) === true) {
                result.push(splittedWords[i]);
                wordCount++;
            }
        }
        return result;
    }
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));