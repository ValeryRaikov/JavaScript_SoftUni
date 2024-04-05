function calc(operation) {
    const firstInputElement = Number(document.getElementById('number1').value);
    const secondInputElement = Number(document.getElementById('number2').value);
    const resultInputElement = document.getElementById('result');

    let result = 0;
    switch (operation) {
        case '+':
            result = firstInputElement + secondInputElement;
            break;
        case '-':
            result = firstInputElement - secondInputElement;
            break;
        case '*':
            result = firstInputElement * secondInputElement;
            break;
        case '/':
            if (secondInputElement === 0) {
                alert('Error: Zero division impossible!');
                resultInputElement.value = '-';
                return;
            }

            result = firstInputElement / secondInputElement;
            break;
        case '%':
            result = firstInputElement % secondInputElement;
            break;
        default:
            alert('Unexpected error! Refresh.');
            return;
    }

    resultInputElement.value = result.toFixed(3);
}