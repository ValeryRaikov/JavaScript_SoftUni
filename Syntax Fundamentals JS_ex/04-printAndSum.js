function printAndSum(start, end) {
    let output = '';
    let totalSum = 0;

    for (let i = start; i <= end; i++) {
        output += i + ' ';
        totalSum += i
    }

    console.log(output);
    console.log(`Sum: ${totalSum}`);
}

// printAndSum(0, 26);