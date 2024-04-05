// Initial solutions already uploaded in the same directory. This file presents more solutions to the same problems just for self training

// 01
// Using array methods
function sumElements(numbers) {
    const firstNumber = numbers.shift();
    const lastNumber = numbers.pop();

    console.log(firstNumber + lastNumber);
}

// sumElements([11, 58, 69]);


// 02
// Using classic for loop and a new array
function reverseArray(n, arr) {
    let reversedArr = [];

    for (let i = 0; i < n; i++) {
        reversedArr.push(arr[i]);
    }

    reversedArr = reversedArr.reverse();

    let output = reversedArr.join(' ');

    console.log(output);
}

// Using for of loop (hell solution...)
function reverseArray(n, arr) {
    let counter = 0;
    let output = '';

    for (let arrEl of arr.slice(0, n).reverse()) {
        if (counter < n) {
            output += `${arrEl} `;

            counter++;
        }
    }

    console.log(output);
}

// Using chained array methods
function reverseArray(n, arr) {
    let output = arr.slice(0, n).reverse().join(' ');

    console.log(output);
}

// Algorithmic approach
function reverseArray(n, arr) {
    let output = '';

    for (let i = n - 1; i >= 0; i--) {
        output += arr[i];
        if (i !== 0) {
            output += ' ';
        }
    }
    console.log(output);
}

// reverseArray(3, [10, 20, 30, 40, 50]);


// 03
// Using for of loop
function calculateDiff(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        (num % 2 == 0) ? evenSum += num : oddSum += num;
    }

    console.log(evenSum - oddSum);
}

// Using filter method
function calculateDiff(numbers) {
    let evenNums = numbers.filter(num => num % 2 === 0);
    let oddNums = numbers.filter(num => num % 2 !== 0);

    let diff = 0;

    for (let num of evenNums) {
        diff += num;
    }

    for (let num of oddNums) {
        diff -= num;
    }

    console.log(diff);
}

// Using filter and reduce methods
function calculateDiff(numbers) {
    let evenNums = numbers.filter(num => num % 2 === 0);
    let oddNums = numbers.filter(num => num % 2 !== 0);

    let evenSum = evenNums.reduce((sum, num) => sum + num, 0);
    let oddSum = oddNums.reduce((sum, num) => sum + num, 0);

    console.log(evenSum - oddSum);
}

// Using reduce once
function calculateDiff(numbers) {
    let diff = numbers.reduce((sum, num) => {
        return (num % 2 === 0) ? sum + num : sum - num;
    }, 0);

    console.log(diff);
}

// Using map and reduce
function calculateDiff(numbers) {
    const diff = numbers
    .map(num => num % 2 === 0 ? num : -num)
    .reduce((sum, num) => sum + num, 0);

    console.log(diff);
}

// calculateDiff([2,4,6,8,10]);


// 04
// Using slice method instead of substring
function substringText(text, start, count) {
    console.log(text.slice(start, start + count));
}

// Algorithmic approach
function substringText(text, start, end) {
    let output =  '';

    for (let i = start; i <= end; i++) {
        output += text[i];
    }

    console.log(output);
}

// substringText('SkipWord', 4, 7);


// 05
// Using replaceAll method
function censorText(text, word) {
    let output = text.replaceAll(word, '*'.repeat(word.length));

    console.log(output);
}

// Using replace and indexOf methods
function censorText(text, word) {
    let matchIndex = text.indexOf(word);

    while (matchIndex !== -1) {
        text = text.replace(word, '*'.repeat(word.length));

        matchIndex = text.indexOf(word);
    }

    console.log(text);
}

// censorText('Find the hidden word if it is hidden and hidden again', 'hidden');


// 06
function findOccurences(text, word) {
    let count = 0;

    const regex = new RegExp({word}, 'g');

    const replacedText = text.replace(regex, () => {
        count++;
        return '*'.repeat(word.length);
    });

    console.log(count);
}

// findOccurences('This is a word and it also is a sentence','is');