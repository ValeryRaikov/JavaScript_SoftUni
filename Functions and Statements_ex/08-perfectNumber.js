// 01
function checkPerfectNumber(number) {
    let totalSum = 0; 

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            totalSum += i;
        }
    }

    (totalSum === number) ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}

// checkPerfectNumber(28);
// checkPerfectNumber(1236498);