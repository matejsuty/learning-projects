function camelcase(s) {
    let count = 1;
    let splittedWord = s.split('');
    for (let i = 0; i < splittedWord.length; i++) {
       if(splittedWord[i] == splittedWord[i].toUpperCase()) {
        count++
       }
    }
    return count;
}

console.log(camelcase('saveChangesInTheEditor'));