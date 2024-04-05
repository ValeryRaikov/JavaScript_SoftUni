// 01
function addItem() {
    const listItemsElement = document.getElementById('items');
    const inputItemElement = document.getElementById('newItemText');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputItemElement.value;

    listItemsElement.appendChild(newItemElement); // appendChild() == append()

    inputItemElement.value = '';
}

// 02 ONLY FOR TRAINING
function addItem() {
    const listItemsElement = document.getElementById('items');
    const inputItemElement = document.getElementById('newItemText');

    const newItemText = inputItemElement.value;

    listItemsElement.innerHTML += `<li>${newItemText}</li>`;

    inputItemElement.value = '';
}