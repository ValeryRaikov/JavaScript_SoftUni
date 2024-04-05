// 01
function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[type=text][name=email]');
    const resultElement = document.getElementById('result');
    const tableTrElements = document.querySelectorAll('table#customers tbody tr');

    const resultTrElement = Array.from(tableTrElements)
        .find(trElement => trElement.children[1].textContent.includes(inputEmailElement.value));

    if (resultTrElement) {
        resultTrElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    inputEmailElement.value = '';
}

// 02
function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[type=text][name=email]');
    const resultElement = document.getElementById('result');
    const tableTrElements = document.querySelectorAll('table#customers tbody tr');

    for (const trElement of tableTrElements) {
        const tdEmailElement = trElement.querySelector('td:last-of-type');

        const inputEmail = inputEmailElement.value;
        const tdEmail = tdEmailElement.textContent;

        if (inputEmail === tdEmail) {
            trElement.remove();
            resultElement.textContent = 'Deleted.';
            break;
        }

        resultElement.textContent = 'Not found.';
    }

    inputEmailElement.value = '';
}

// 03 Not for judge
function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[type=text][name=email]');
    const resultElement = document.getElementById('result');
    const tableTbodyElement = document.querySelector('table#customers tbody');

    let found = false;

    for (const trElement of tableTbodyElement.children) {
        const tdEmailElement = trElement.querySelector('td:last-of-type');

        if (tdEmailElement.textContent === inputEmailElement.value) {
            tableTbodyElement.removeChild(trElement);
            found = true;
            break;
        }
    }

    resultElement.textContent = found ? 'Deleted.' : 'Not found.';

    inputEmailElement.value = '';
}
