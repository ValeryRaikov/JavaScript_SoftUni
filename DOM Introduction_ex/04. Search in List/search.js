// 01
function search() {
    const townListElement = document.getElementById('towns');
    const searchTextElement = document.getElementById('searchText');
    const resultElement = document.getElementById('result');

    let matchCount = 0;
    const townElements = Array.from(townListElement.children);

    for (const townElement of townElements) {
        townElement.style.textDecoration = '';
        townElement.style.fontWeight = '';

        if (townElement.textContent.toLowerCase().includes(searchTextElement.value.toLowerCase())) {
            townElement.style.textDecoration = 'underline';
            townElement.style.fontWeight = 'bold';
            matchCount++;
        }
    }

    resultElement.textContent = `${matchCount} matches found`;
}

// 02
function search() {
    const townListElement = document.getElementById('towns');
    const searchTextElement = document.getElementById('searchText');
    const resultElement = document.getElementById('result');

    let matchCount = 0;
    for (const townElement of townListElement.childNodes) {
        townElement.style = {};

        if (townElement.textContent.toLowerCase().includes(searchTextElement.value.toLowerCase())) {
            townElement.style.textDecoration = 'underline';
            townElement.style.fontWeight = 'bold';
            matchCount++;
        }
    }

    resultElement.textContent = `${matchCount} matches found`;
}