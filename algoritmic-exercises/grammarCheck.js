function grammarCheck (str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '.' && str[i+1] === ' ' && str[i+2] === str[i+2].toUpperCase()) {
        } else if (str[i] === '.' && str[i+1] === undefined || str[i] === '.') {
        } else if (str[i] === '.') {
            return false;
        }
    }
    return true;
}

module.exports = grammarCheck;