// 01
function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimlOptionElement = document.createElement('option');
    hexadecimlOptionElement.value = 'hexadecimal';
    hexadecimlOptionElement.textContent = 'Hexadecimal';

    selectMenuToElement.appendChild(hexadecimlOptionElement);

    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHex,
    };

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);

        resultElement.value = convertors[selectMenuToElement.value](numberValue)
    });

    function convertDecimalToBinary(number) {
        const result = [];
        while (number > 0) {
            result.push(number % 2);
            number = Math.trunc(number / 2);
        }

        return result.reverse().join('');
    }
    
    function convertDecimalToHex(number = 10) {
        const digitMapping = new Map([
            [0, '0'],
            [1, '1'],
            [2, '2'],
            [3, '3'],
            [4, '4'],
            [5, '5'],
            [6, '6'],
            [7, '7'],
            [8, '8'],
            [9, '9'],
            [10, 'A'],
            [11, 'B'],
            [12, 'C'],
            [13, 'D'],
            [14, 'E'],
            [15, 'F'],
        ])
        const result = [];

        while (number > 0) {
            result.push(digitMapping.get(number % 16));
            number = Math.trunc(number / 16);
        }

        return result.reverse().join('');
    }
}

// 02
function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';

    selectMenuToElement.appendChild(hexadecimalOptionElement);

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);
        const conversionType = selectMenuToElement.value;

        let result;
        if (conversionType === 'binary') {
            result = convertDecimalToBinary(numberValue);
        } else if (conversionType === 'hexadecimal') {
            result = convertDecimalToHex(numberValue);
        }

        resultElement.value = result;
    });

    function convertDecimalToBinary(number) {
        let result = '';
        while (number > 0) {
            result = (number % 2) + result;
            number = Math.trunc(number / 2);
        }
        return result || '0';
    }

    function convertDecimalToHex(number) {
        const hexChars = '0123456789ABCDEF';
        let result = '';
        while (number > 0) {
            result = hexChars[number % 16] + result;
            number = Math.trunc(number / 16);
        }
        return result || '0';
    }
}

// 03
function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';

    selectMenuToElement.appendChild(hexadecimalOptionElement);

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);
        const conversionType = selectMenuToElement.value;

        let result;
        if (conversionType === 'binary') {
            result = numberValue.toString(2);
        } else if (conversionType === 'hexadecimal') {
            result = numberValue.toString(16).toUpperCase();
        }

        resultElement.value = result;
    });
}
