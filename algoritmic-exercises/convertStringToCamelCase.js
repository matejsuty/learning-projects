function toCamelCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i];
      let nextChar = str[i+1];
  
      if(currentChar == '-' || currentChar == '_') {
        result += nextChar.toUpperCase();
        i++;
      } else {
        result += currentChar;
      }
    }
    return result;
}