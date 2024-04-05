function toUpper(text) {
    const regexPattern = new RegExp(/[.?!,\/#!$%\^&\*;:{}=\-_`~()]/g);

    text = text.replace(regexPattern, '');

    const wordArray = text.split(' ');

    let result = '';
    for (let i = 0; i < wordArray.length; i++) {
        result += wordArray[i].toUpperCase();
        if (i < wordArray.length - 1) {
            result += ', ';
        }
    }

    console.log(result);
}

// toUpper('Hi, how are you?');