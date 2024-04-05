function censorText(text, word) {
    const symbol = '*';

    let censoredText = text;

    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, symbol.repeat(word.length));
    }

    console.log(censoredText);
}

// censorText('Find the hidden word if it is hidden and hidden again', 'hidden');