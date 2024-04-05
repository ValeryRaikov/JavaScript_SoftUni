// 01
function findOddOccurances(input) {
    const searchText = input.toLowerCase().split(' ');

    let wordOccurances = {};

    for (const word of searchText) {
        if (!wordOccurances[word]) {
            wordOccurances[word] = 0;
        }

        wordOccurances[word]++;
    }

    let output = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            output.push(word);
        }
    }

    console.log(output.join(' '));
}

// 02
function findOddOccurances(input) {
    const occurances = input
        .toLowerCase()
        .split(' ')
        .reduce((acc, word) =>
            acc.hasOwnProperty(word)
                ? { ...acc, [word]: acc[word] + 1 }
                : { ...acc, [word]: 1 }
        , {});

    const result = Object.entries(occurances)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word, count]) => word)
        .join(' ');

    console.log(result);
}

// 03
function findOddOccurances(input) {
    const words = input.toLowerCase().split(' ');
    const wordMap = new Map();

    for (const word of words) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 0);
        }

        wordMap.set(word, wordMap.get(word) + 1);
    }

    const result = [];
    for (const [word, occurances] of wordMap) {
        if (occurances % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

// findOddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');