// 01
function findWords(text) {
    const pattern = /#[A-Za-z]+/g;

    const matches = text.matchAll(pattern);

    for (const match of matches) {
        console.log(match[0].slice(1));
    }   
}

// 02
function findWords(text) {
    const pattern = /#(?<word>[A-Za-z]+)/g;

    const matches = text.matchAll(pattern);

    for (const match of matches) {
        console.log(match.groups.word);
    }
}

// findWords('The symbol # is known #variously in English-speaking #regions as the #number sign');