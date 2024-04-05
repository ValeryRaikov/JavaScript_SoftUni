// 01
function checkforWord(word, text) {
    const textWords = text.toLowerCase().split(' ');

    const isFound = textWords.includes(word.toLowerCase());

    (isFound) ? console.log(word): console.log(`${word} not found!`);
}

// 02
function checkForWord(word, text) {
    const pattern = new RegExp(`\\b${word.toLowerCase()}\\b`, 'g');

    const matches = text.toLowerCase().match(pattern);

    if (matches !== null) {
        return console.log(word);
    }

    return console.log(`${word} not found!`);
}

// checkForWord('javascript', 'JavaScript is the best programming language');