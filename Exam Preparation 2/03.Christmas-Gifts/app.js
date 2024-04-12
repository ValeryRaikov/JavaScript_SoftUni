// 01 Promise syntax / EASY SOLUTION
/* const baseUrl = 'http://localhost:3030/jsonstore/gifts'

const loadPresentsBtnElement = document.getElementById('load-presents');
const addPresentBtnElement = document.getElementById('add-present');
const editPresentBtnElement = document.getElementById('edit-present');

const giftInputElement = document.getElementById('gift');
const giftForInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');

function clearInputFields(...fields) {
    fields.forEach(field => field.value = '');
}

function loadPresents() {
    const giftListDivElement = document.getElementById('gift-list');
    const editPresentBtnElement = document.getElementById('edit-present');

    giftListDivElement.innerHTML = '';

    fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch presents from server!');
            }

            return res.json();
        })
        .then(presentsData => {
            Object.values(presentsData).forEach(present => {
                editPresentBtnElement.setAttribute('disabled', 'disabled');

                const giftPElement = document.createElement('p');
                giftPElement.textContent = present.gift;
                const giftForPElement = document.createElement('p');
                giftForPElement.textContent = present.for;
                const pricePElement = document.createElement('p');
                pricePElement.textContent = present.price;

                const contentDivElement = document.createElement('div');
                contentDivElement.classList.add('content');
                contentDivElement.appendChild(giftPElement);
                contentDivElement.appendChild(giftForPElement);
                contentDivElement.appendChild(pricePElement);

                const changeBtnElement = document.createElement('button');
                changeBtnElement.classList.add('change-btn');
                changeBtnElement.textContent = 'Change';

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.classList.add('delete-btn');
                deleteBtnElement.textContent = 'Delete';

                const btnContainerElement = document.createElement('div');
                btnContainerElement.classList.add('buttons-container');
                btnContainerElement.appendChild(changeBtnElement);
                btnContainerElement.appendChild(deleteBtnElement);

                const giftSockDivElement = document.createElement('div');
                giftSockDivElement.classList.add('gift-sock');
                giftSockDivElement.appendChild(contentDivElement);
                giftSockDivElement.appendChild(btnContainerElement);

                giftListDivElement.appendChild(giftSockDivElement);

                changeBtnElement.addEventListener('click', () => {
                    giftSockDivElement.remove();

                    giftInputElement.value = present.gift;
                    giftForInputElement.value = present.for;
                    priceInputElement.value = present.price;

                    editPresentBtnElement.removeAttribute('disabled');
                    addPresentBtnElement.setAttribute('disabled', 'disabled');
                });

                editPresentBtnElement.addEventListener('click', () => {
                    fetch(`${baseUrl}/${present._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            gift: giftInputElement.value,
                            for: giftForInputElement.value,
                            price: priceInputElement.value, 
                        }),
                    })
                        .then(res => {
                            if (!res.ok) {
                                throw new Error('Failed to edit present!');
                            }

                            loadPresents();
                        })
                        .catch(err => console.error(err));

                    editPresentBtnElement.setAttribute('disabled', 'disabled');
                    addPresentBtnElement.removeAttribute('disabled');

                    clearInputFields(giftInputElement, giftForInputElement, priceInputElement);
                });

                deleteBtnElement.addEventListener('click', () => {
                    fetch(`${baseUrl}/${present._id}`, {
                        method: 'DELETE',
                        headers: { 
                            'content-type': 'application/json'
                        } 
                    })
                        .then(res => {
                            if (!res.ok) {
                                throw new Error('Failed to edit present!');
                            }

                            loadPresents();
                        });
                });
            });
        })
        .catch(err => console.error(err));
}

function createPresent() {
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            gift: giftInputElement.value,
            for: giftForInputElement.value,
            price: priceInputElement.value,
        }),
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create gift and post to server!');
            }

            loadPresents();
        })
        .catch(err => console.error(err));

        clearInputFields(giftInputElement, giftForInputElement, priceInputElement);
}

loadPresentsBtnElement.addEventListener('click', loadPresents);
addPresentBtnElement.addEventListener('click', createPresent); */

// 02 Promise syntax / COMPLEX SOLUTION
const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsBtnElement = document.getElementById('load-presents');
const addPresentBtnElement = document.getElementById('add-present');
const editPresentBtnElement = document.getElementById('edit-present');
const giftListElement = document.getElementById('gift-list');
const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
const formContainerElement = document.getElementById('form');

loadPresentsBtnElement.addEventListener('click', loadPresents);
addPresentBtnElement.addEventListener('click', addPresent);
editPresentBtnElement.addEventListener('click', editGift);
giftListElement.addEventListener('click', deleteGift);

function clearInputFields() {
    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}

function getInputData() {
    return {
        gift: giftInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value
    }
};

function addPresent() {
    const present = getInputData();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(present)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create present!');
            }

            clearInputFields();

            return loadPresents();
        })
        .catch(err => console.error(err));
}

function loadPresents() {
    giftListElement.innerHTML = '';
    
    fetch(baseUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create present!');
            }

            return res.json();
        })
        .then(presentsData => {
            const giftListFragment = document.createDocumentFragment();

            Object.values(presentsData).forEach(present => {
                giftListFragment.appendChild(createGiftSockElement(present));
            })

            giftListElement.appendChild(giftListFragment);
        })
        .catch(err => console.error(err));
}

function createGiftSockElement(present) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGift(e, present));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const giftPElement = document.createElement('p');
    giftPElement.textContent = present.gift;

    const forPElement = document.createElement('p');
    forPElement.textContent = present.for;

    const pricePElement = document.createElement('p');
    pricePElement.textContent = present.price;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);

    const giftSockDivElement = document.createElement('div');
    giftSockDivElement.classList.add('gift-sock');
    giftSockDivElement.appendChild(contentDivElement);
    giftSockDivElement.appendChild(buttonsDivElement);

    giftSockDivElement.setAttribute('data-id', present._id);

    return giftSockDivElement;
}

function changeGift(e, present) {
    // const giftElement = e.currentTarget.closest('.gift-sock');
    const giftElement = e.currentTarget.parentElement.parentElement;
    giftElement.remove();

    giftInputElement.value = present.gift;
    forInputElement.value = present.for;
    priceInputElement.value = present.price;

    formContainerElement.setAttribute('data-id', present._id);

    editPresentBtnElement.removeAttribute('disabled');

    addPresentBtnElement.setAttribute('disabled', 'disabled');
}

function editGift() {
    const present = getInputData();

    const giftId = formContainerElement.getAttribute('data-id');

    formContainerElement.removeAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ _id: giftId, ...present }),
        // body: JSON.stringify(Object.assign({}, present, { _id: giftId })),
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create present!');
            }

        loadPresents();

        editPresentBtnElement.setAttribute('disabled', 'disabled');

        addPresentBtnElement.removeAttribute('disabled');

        clearInputFields();
        })
        .catch(err => console.error(err));
}

function deleteGift(e) {
    if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn'))  {
        return;
    }

    const giftElement = e.target.parentElement.parentElement;

    const giftId = giftElement.getAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to create present!');
            }
            
            giftElement.remove();
        })
        .catch(err => console.error(err));
}