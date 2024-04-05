// 01
function extractText() {
    const itemsElement = document.getElementById('items');
    const textareaElement = document.getElementById('result');

    textareaElement.value = itemsElement.textContent;
}

// 02
function extractText() {
    const itemsNodeElement = document.querySelectorAll('#items li');
    const textareaElement = document.querySelector('#result');

    for (const node of itemsNodeElement) {
        textareaElement.value += node.textContent + "\n";
    }
}