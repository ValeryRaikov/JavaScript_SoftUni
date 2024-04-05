// 01
function colorize() {
    const tableRowsElement = document.querySelectorAll('table tr:nth-child(even)');

    for (tableRow of tableRowsElement) {
        tableRow.style.backgroundColor = 'teal';
    }
}

// 02
function colorize() {
    const tableRowsElement = document.querySelectorAll('table tr');

    for (let i = 0; i < tableRowsElement.length; i++) {
        if (i % 2 !== 0) {
            tableRowsElement[i].style.background = 'teal';
        }
    }
}