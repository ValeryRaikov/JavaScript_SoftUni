// 01
function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const trElements = document.querySelectorAll('table.container tbody tr');
        const searchFieldElement = document.getElementById('searchField');

        for (const trElement of trElements) {
            const tdElements = trElement.querySelectorAll('td');
            let isSelected = false;

            trElement.classList.remove('select');

            for (const tdElement of tdElements) {
                if (tdElement.textContent.includes(searchFieldElement.value)) {
                    isSelected = true;
                    break;
                }
            }

            if (isSelected) {
                trElement.classList.add('select');
            }
        }

        searchFieldElement.value = '';
    }
}

// 02
function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const trElements = document.querySelectorAll('table.container tbody tr');
        const searchText = document.getElementById('searchField').value;

        for (const trElement of trElements) {
            if (trElement.textContent.includes(searchText)) {
                trElement.classList.add('select');
            } else {
                trElement.classList.remove('select');
            }
        }

        searchText = '';
    }
}