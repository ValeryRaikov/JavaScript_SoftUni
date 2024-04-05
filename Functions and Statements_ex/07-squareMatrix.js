// 01
function printSquareMatrix(n) {
    let output = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            output += n + ' ';
        }

        output += '\n';
    }

    console.log(output);
}

// printSquareMatrix(3);
// printSquareMatrix(7);