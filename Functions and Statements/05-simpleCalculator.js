// 01
function calculate(num1, num2, operation) {
    switch (operation) {
        case 'multiply':
            console.log(num1 * num2);
            break;
        case 'divide':
            console.log(num1 / num2);
            break;
        case 'add':
            console.log(num1 + num2);
            break;
        case 'subtract':
            console.log(num1 - num2);
            break;
    }
}
// calculate(5, 5, 'multiply');

// 02
function solve(num1, num2, operation) {
    function calculate(num1, num2, operation) {
        switch (operation) {
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
        }
    }

    const result = calculate(num1, num2, operation);
    console.log(result);
}

// solve(5, 5, 'multiply');

// 03
function calculate(num1, num2, operation) {
    const operations = {
        multiply: (num1, num2) => num1 * num2,
        divide: (num1, num2) => num1 / num2,
        add: (num1, num2) => num1 + num2,
        subtract: (num1, num2) => num1 - num2,
    }

    console.log(operations[operation](num1, num2));
}

// calculate(5, 5, 'multiply');