// 01
function calculateSums(number) {
    let oddSum = 0;
    let evenSum = 0;

    const digits = String(number).split('').map(Number);

    for (let i = 0; i < digits.length; i++) {
        const currentDigit = digits[i];

        (currentDigit % 2 !== 0) ? oddSum += currentDigit: evenSum += currentDigit;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); 
}

// 02
function calculateSums(number) {
    const digits = String(number).split('').map(Number);

    const oddSum = digits.filter(d => d % 2 !== 0).reduce((sum, digit) => {
        return sum + digit;
    }, 0);
    const evenSum = digits.filter(d => d % 2 === 0).reduce((sum, digit) => {
        return sum + digit;
    }, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`); 
}

// calculateSums(1000435);
// calculateSums(3495892137259234);