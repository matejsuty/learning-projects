function high(x){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let words = x.split(" ");
    console.log(words);
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
        console.log(word);
        let lettersSum = 0;
      
        for (let letter of word) {
            lettersSum += alphabet.indexOf(letter) + 1;
        }
      
        if (lettersSum > highestScore) {
            highestScore = lettersSum;
            highestScoreWord = word;
        }
    }
    return highestScoreWord;
}

console.log(high('aa b ccc'));