function superReducedString(s) {
    const splittedString = s.split('');
    for (let i = 0; i < splittedString.length; i++) {
        if(splittedString[i] === splittedString[i+1]) {
            splittedString.splice(i,2);
            i = -1;
        }
    }
    if (!splittedString[0]) {
        return "Empty String";
    } else {
        return splittedString.join('');
    }
}

module.exports = superReducedString;