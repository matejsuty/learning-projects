function pigIt(str) {
  const Words = str.split(' ');
  const Result = Words.map(Word => {
    const Letters = Word.split('');
    const FirstLetter = Letters.shift();
    const specialSymbols = /^[a-zA-Z]/;
    if(FirstLetter.search(specialSymbols) === -1) {
      Letters.push(FirstLetter);
      return Letters.join('');
    } else {
      Letters.push(FirstLetter);
      return Letters.join('') + 'ay';
    }
  });
  return Result.join(",").replaceAll(',', ' ');
}

console.log(pigIt('Hello world !'));