// 01
function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const resultInputElement = document.getElementById('sum');

    resultInputElement.value = Number(firstInputElement.value) + Number(secondInputElement.value);
}

// 02
function calc() {
    const firstInputElement = document.querySelector('#num1').value;
    const secondInputElement = document.querySelector('#num2').value;
    const resultInputElement = document.querySelector('#sum');

    resultInputElement.value = Number(firstInputElement) + Number(secondInputElement);
}