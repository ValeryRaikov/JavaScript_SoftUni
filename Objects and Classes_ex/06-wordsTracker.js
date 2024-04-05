// 01
function findWords(input) {
    const targetWords = input.shift().split(' ');

    let wordOccurances = {};

    for (const word of input) {
        for (const targetWord of targetWords) {
            if (targetWord === word) {
                if (!wordOccurances[word]) {
                    wordOccurances[word] = 0;
                }
    
                wordOccurances[word]++;
            }
        }
    } 

    Object.entries(wordOccurances)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occ]) => console.log(`${word} - ${occ}`));
}

// 02
function findWords(input) {
    const targetWords = input.shift().split(' ');

    let wordOccurances = {};

    for (const targetWord of targetWords) {
        wordOccurances[targetWord] = 0;
    }
    
    for (const word of input) {
        if (wordOccurances.hasOwnProperty(word)) {
            wordOccurances[word]++;
        }
    }

    const sortedWords = Object.entries(wordOccurances)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, occ] of sortedWords) {
        console.log(`${word} - ${occ}`);
    }
}

// 03
function findWords(input) {
    const words = input.shift().split(' ')
        .reduce((result, word) => ({ ...result, [word]: 0 }), {});
        // .reduce((result, word) => {
        //     result[word] = 0;

        //     return result;
        // }, {});
    
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }

    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occ]) => console.log(`${word} - ${occ}`));
}

// 04 (Using Map)
function findWords(input) {
    const targetWords = input.shift().split(' ');
    const wordMap = new Map(targetWords.map(word => [word, 0]));

    for (const word of input) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }

    [...wordMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occ]) => console.log(`${word} - ${occ}`));
}

/* findWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

findWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]); */