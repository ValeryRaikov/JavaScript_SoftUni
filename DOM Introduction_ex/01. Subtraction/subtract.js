// 01
function subtract() {
    const firstInputVal = document.getElementById('firstNumber').value;
    const secondInputVal = document.getElementById('secondNumber').value;
    const resultElement = document.getElementById('result');

    resultElement.textContent = Number(firstInputVal) - Number(secondInputVal);
}