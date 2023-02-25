function minimumNumber(n, password) {
    let hasNumbers = password.search(/[0-9]/);
    let hasUpper = password.search(/[A-Z]/);
    let hasLower = password.search(/[a-z]/);
    let hasSpecial = password.search(/[!@#$%^&*()+-]/);
    
    let num = 0
    let minLength = 6

    if(hasNumbers === -1) {
        num++;
    } if(hasUpper === -1) {
        num++;
    } if(hasLower === -1) {
        num++;
    } if(hasSpecial === -1) {
        num++;
    }

    if(n < minLength) {
        return Math.max(num, minLength - n);
    } else {
        return num;
    }
}