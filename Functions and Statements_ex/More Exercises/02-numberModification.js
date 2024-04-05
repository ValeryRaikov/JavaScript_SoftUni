// 01
function modifyNumber(number) {
    const digits = String(number).split('').map(Number);

    let avgDigitsSum = digits.reduce((sum, digit) => { return sum + digit }, 0) / digits.length;

    while (avgDigitsSum < 5) {
        digits.push(9);

        avgDigitsSum = digits.reduce((sum, digit) => { return sum + digit }, 0) / digits.length;
    }

    console.log(digits.join(''));
}

// modifyNumber(101);
// modifyNumber(5835);