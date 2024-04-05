// 01
function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    Array.from(inputElements)
        .forEach(inputElement => inputElement.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused'); // target == currentTarget
    }));

    Array.from(inputElements)
        .forEach(inputElement => inputElement.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
    }));
}

// 02
function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    for (const inputElement of inputElements) {
        inputElement.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        inputElement.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    }
}