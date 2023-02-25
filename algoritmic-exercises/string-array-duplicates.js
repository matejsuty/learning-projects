function dup(s) {
    s.forEach(word => {
        const splittedWord = word.split('');
        for (let i = splittedWord.length - 1; i > 0; i--) {
            if(i <= splittedWord.length && splittedWord[i] === splittedWord[i - 1]) {
                console.log(splittedWord.splice(i,1));
            }
        }
        return splittedWord.join('');
    })
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));