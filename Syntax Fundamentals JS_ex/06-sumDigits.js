function sumDigits(number) {
    let totalSum = 0;

    while (number > 0) {
        let digit = number % 10;

        totalSum += digit;

        number = Math.floor(number / 10);
    }

    console.log(totalSum);
}

// sumDigits(245678);