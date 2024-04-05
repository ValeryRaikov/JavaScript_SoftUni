// 01
function encodeAndDecodeMessages() {
    const firstTextareaElement = document.querySelector('textarea:first-of-type');
    const secondTextareaElement = document.querySelector('textarea:last-of-type');
    const encodeButtonElement = document.querySelector('button:first-of-type');
    const decodeButtonElement = document.querySelector('button:last-of-type');

    encodeButtonElement.addEventListener('click', () => {
        const inputText = firstTextareaElement.value;
        
        let encodedText = '';
        for (let i = 0; i < inputText.length; i++) {
            let charCode = inputText.charCodeAt(i);
            charCode++;
            encodedText += String.fromCharCode(charCode);
        }

        firstTextareaElement.value = '';
        secondTextareaElement.textContent = encodedText;
    });

    decodeButtonElement.addEventListener('click', () => {
        const encodedText = secondTextareaElement.textContent;

        let outputText = '';
        for (let i = 0; i < encodedText.length; i++) {
            let charCode = encodedText.charCodeAt(i);
            charCode--;
            outputText += String.fromCharCode(charCode);
        }

        secondTextareaElement.textContent = outputText;
    });
}

// 02
function encodeAndDecodeMessages() {
    const messageElements = document.querySelectorAll('#main div textarea');
    const encodeButtonElement = document.querySelector('button:first-of-type');
    const decodeButtonElement = document.querySelector('button:last-of-type');

    const shiftCharacters = function(string, shift) {
        return string.split('').map(char => {
            const charCode = char.charCodeAt(0);
            const shiftedCharCode = charCode + shift;
            return String.fromCharCode(shiftedCharCode);
        }).join('');
    };

    encodeButtonElement.addEventListener('click', function() {
        const messageContent = messageElements[0].value;
        const encodedMessage = shiftCharacters(messageContent, 1);
        messageElements[1].value = encodedMessage;
        messageElements[0].value = '';
    });

    decodeButtonElement.addEventListener('click', function() {
        const encodedMessage = messageElements[1].value;
        const decodedMessage = shiftCharacters(encodedMessage, -1);
        messageElements[0].value = decodedMessage;
        messageElements[1].value = '';
    });
}
