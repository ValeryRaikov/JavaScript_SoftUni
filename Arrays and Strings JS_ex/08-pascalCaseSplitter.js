// 01
function splitPascalText(text) {
    console.log(text.split(/(?=[A-Z])/).join(', '));
}

// 02
function splitPascalText(text) {
    const matches = text.matchAll(/[A-Z][a-z]*/g);

    const words = Array.from(matches).map(match => match[0]);
    console.log(words.join(', '));
}

// splitPascalText('SplitMeIfYouCanHaHaYouCantOrYouCan');