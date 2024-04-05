// 01
function printHelix(length) {
    const sequence = 'ATCGTTAGGG';
    let position = 0;
    let direction = 0;

    for (let i = 0; i < length; i++) {
        const symbol = sequence[position % sequence.length];
        const spaces = ' '.repeat(Math.abs(direction));

        if (direction % 2 === 0) {
            console.log(`${spaces}${symbol}--${sequence[(position + 1) % sequence.length]}`);
        } else {
            console.log(`${spaces}${sequence[(position + 1) % sequence.length]}--${symbol}`);
        }

        position++;
        direction++;
        direction %= 4;
    }
}

printHelix(10);
