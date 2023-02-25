function alphanumeric(string) {
    if (string.search(/^[a-zA-Z0-9]+$/) !== -1) {
        return true;
    } else {
        return false;
    }
}


console.log(alphanumeric("hrrhr"));