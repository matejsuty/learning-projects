function repeatStr (n, s) {
    let repeatedString = '';
    for (let i = 0; i < n; i++) {
            repeatedString += s;
    }
    return repeatedString;
}

console.log(repeatStr(3, "Hello"));