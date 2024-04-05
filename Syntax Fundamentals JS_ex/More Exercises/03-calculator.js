function calculate(num1, operator, num2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-' :
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) 
                result = num1 / num2;
            break;
        default:
            console.log("Error!");
    }

    console.log(result.toFixed(2));
}

// calculate(5, '/', 2.5);