function sameNumbers(number) {
    let totalSum = 0;

    let boolFlag = true;
    while (number > 0) {
        let lastDigit = number % 10;
        totalSum += lastDigit;

        number = Math.floor(number / 10);

        if (number == 0) {
            break;
        }

        if (lastDigit != number % 10) {
             boolFlag = false;
        }
    }

    console.log(boolFlag);
    console.log(totalSum);
}

// sameNumbers(1234);