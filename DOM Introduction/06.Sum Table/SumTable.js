// 01
function sumTable() {
    const tablePricesElement = document.querySelectorAll('table tr td:last-of-type');
    const tableTotalElement = document.getElementById('sum');

    let total = 0;
    for (const price of tablePricesElement) {
        total += Number(price.textContent);
    }

    tableTotalElement.textContent = total;
}

// 02
function sumTable() {
    const tablePricesElement = document.querySelectorAll('table tr td:last-of-type');
    const tableTotalElement = document.getElementById('sum');

    const total = Array.from(tablePricesElement)
        .reduce((sum, price) => sum + Number(price.textContent), 0);

    tableTotalElement.textContent = total;
}

// 03
function sumTable() {
    const tablePricesElements = document.querySelectorAll('table tr td:last-of-type');
    const tableTotalElement = document.getElementById('sum');

    let total = 0;
    tablePricesElements.forEach(price => {
        total += Number(price.textContent);
    });

    tableTotalElement.textContent = total;
}
