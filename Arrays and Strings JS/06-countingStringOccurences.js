function findOccurences(text, searchedWord) {
    let wordsArr = text.split(' ');
    let totalCount = 0;

    for (let word of wordsArr) {
        if (word === searchedWord)
            totalCount++;
    }

    console.log(totalCount);
}

// findOccurences('This is a word and it also is a sentence','is');