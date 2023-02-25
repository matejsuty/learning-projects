function getCount(str) {
    let count = 0;
    const vowels = /[aeiou]/;
    for (let i = 0; i < str.length; i++) {
        if(vowels.test(str[i]) === true) {
            count++;
        }
    }
    return count;
}

console.log(getCount("abracadabra"));