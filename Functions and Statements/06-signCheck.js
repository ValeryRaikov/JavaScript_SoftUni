// 01
function signCheck(num1, num2, num3) {
    if (num1 < 0) {
        if ((num2 > 0 && num3 > 0) || (num2 < 0 && num3 < 0)) {
             return console.log('Negative');
        }
    }
    
    if (num2 < 0) {
        if ((num1 > 0 && num3 > 0) || (num1 < 0 && num3 < 0)) {
            return console.log('Negative');
        }
    }
    
    if (num3 < 0) {
        if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
            return console.log('Negative');
        }
    }

    return console.log('Positive');
}

// 02
function signCheck(num1, num2, num3) {
    const countNegatives = [num1, num2, num3].filter(num => num < 0).length;

    return countNegatives % 2 === 0 ? console.log('Positive') : console.log('Negative');
}

// 03
function signCheck(num1, num2, num3) {
    function multiply(a, b) {
        return a * b;
    }

    const result = multiply(multiply(num1, num2), num3);
    
    (result > 0) ? console.log('Positive') : console.log('Negative');
}

/* signCheck( 5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1); */