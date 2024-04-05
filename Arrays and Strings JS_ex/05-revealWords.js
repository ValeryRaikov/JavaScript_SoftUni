// 01
function revealWords(words, templates) {
    const wordsArr = words.split(', ')
    const templatesArr = templates.split(' ');

    const output = templatesArr
    .map(tWord => tWord[0] === '*' ? wordsArr
    .find(w => w.length === tWord.length): tWord)
    .join(' ');

    console.log(output);
}

// 02
function revealWords(words, templates) {
    const wordsArr = words.split(', ');

    const matches = templates.matchAll(/\*+/g);

    for (const match of matches) {
        const word = wordsArr.find(w => w.length === match[0].length);
        templates = templates.replace(match[0], word);
    }

    console.log(templates);
}

// 03
function revealWords(words, templates) {
    const wordsArr = words.split(', ');

    for (let word of words) {
        templates = templates.replace('*'.repeat(word.length), word);
    }

    console.log(templates);
}

// revealWords('great', 'softuni is ***** place for learning new programming languages');