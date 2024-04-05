// 01
function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(thElements)
        .map(thElement => {
            const checkboxElement = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: checkboxElement.checked,
            };
        });

    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tdElements)
                .filter((tdElement, index) => columns[index].active)
                .reduce((data, tdElement, i) => {
                    const columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {});

            return result;
        });

    outputElement.value = JSON.stringify(reportData, null, 2);
}

// 02
function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = [];
    for (const thElement of thElements) {
        const checkboxElement = thElement.querySelector('input[type="checkbox"]');
        const columnName = thElement.textContent.toLowerCase().trim();
        const active = checkboxElement.checked;
        columns.push({ name: columnName, active: active });
    }

    const reportData = [];
    for (const trElement of trElements) {
        const tdElements = trElement.querySelectorAll('td');
        const rowData = {};

        for (let i = 0; i < tdElements.length; i++) {
            if (columns[i].active) {
                const columnName = columns[i].name;
                const cellContent = tdElements[i].textContent.trim();
                rowData[columnName] = cellContent;
            }
        }

        reportData.push(rowData);
    }

    outputElement.textContent = JSON.stringify(reportData, null, 2);
}
