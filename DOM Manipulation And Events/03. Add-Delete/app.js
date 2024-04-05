// 01
function addItem() {
    const listItemsElement = document.getElementById('items');
    const inputItemElement = document.getElementById('newItemText');
    
    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputItemElement.value;

    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    deleteLinkElement.addEventListener('click', () => {
        newInputItemElement.remove();
    });

    newInputItemElement.appendChild(deleteLinkElement);
    listItemsElement.appendChild(newInputItemElement);

    inputItemElement.value = '';
}