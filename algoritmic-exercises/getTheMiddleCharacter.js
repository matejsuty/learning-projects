function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
      return s.substring(middle - 1, middle + 1);
    } else {
      return s.charAt(middle);
    }
}

console.log(getMiddle("testing"));