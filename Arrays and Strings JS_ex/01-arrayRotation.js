// 01
function rotateArr(numbers, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        numbers.push(numbers.shift());
    }

    let output = '';
    for (let num of numbers) {
        output += `${el} `;
    }

    console.log(output);
}

// 02
function rotateArr(numbers, numOfRotations) {
    for (let i = 0; i < numOfRotations; i++) {
        numbers.push(numbers.shift());
    }

    const output = numbers.join(' ');

    console.log(output);
}

// rotateArr([51, 47, 32, 61, 21], 2);
// rotateArr([32, 21, 61, 1], 4);