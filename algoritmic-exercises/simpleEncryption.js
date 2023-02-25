function encrypt(text, n) {
    if(text === "" || n <= 0 || text === null) {
        return text;
    } else {
        for (let i = 0; i < n; i++) {
            let odd = "";
            let even = "";
            for (let j = 0; j < text.length; j++) {
                if(j % 2 === 0) {
                    even += text[j];
                } else {
                    odd += text[j];
                }
            }
            text = odd + even;
        }
        return text;
    }
}

function decrypt(encryptedText, n) {
    if(encryptedText === "" || n <= 0 || encryptedText === null) {
        return encryptedText;
    } else {
        for (let i = 0; i < n; i++) {
            let result = "";
            let mid = Math.floor(encryptedText.length / 2);
            let odd = encryptedText.slice(0, mid);
            let even = encryptedText.slice(mid);
            for (let i = 0; i < mid; i++) {
                result += even[i];
                result += odd[i];
            }
            if(encryptedText.length % 2 !== 0) {
                result += even[mid];
            }
            encryptedText = result;
        }
        return encryptedText;
    }
}