// 01
function toggle() {
    const buttonElement = document.querySelector('.head span.button');
    const extraInfoElement = document.querySelector('#extra');

    const buttonValue = buttonElement.textContent;

    if (buttonValue === 'More') {
        extraInfoElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraInfoElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}