// const pattern = /^(?=(?:.*\d){2,})[a-zA-Z\d]{6,10}$/g;

// 01
function checkPassword(password) {
    const alphaNumericPattern = /^[A-Za-z1-9]+$/g;
    const twoDigitPattern = /(?=(?:.*\d){2,})/g;

    let errors = [];

    if (password.length < 6 || password.length > 10) {
        errors.push('Password must be between 6 and 10 characters');
    }

    if (!alphaNumericPattern.test(password)) {
        errors.push('Password must consist only of letters and digits');
    }

    if (!twoDigitPattern.test(password)) {
        errors.push('Password must have at least 2 digits');
    }

    if (errors.length !== 0) {
        errors.forEach(err => {
            console.log(err);
        });
    } else {
        console.log('Password is valid');
    }
}

// checkPassword('MyPass123');
// checkPassword('Pa$s$s');