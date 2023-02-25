function accum(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        result += char.toUpperCase();
        for (let j = 0; j < i; j++) {
            result += char.toLowerCase();
        }
        if(i < s.length - 1) {
            result += '-';
        }
    }
    return result;
}