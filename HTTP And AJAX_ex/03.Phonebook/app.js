// 01 Promise syntax
function attachEvents() {
    baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadBtnElement = document.getElementById('btnLoad');
    const createBtnElement = document.getElementById('btnCreate');

    const bookUlElement = document.getElementById('phonebook');

    const loadContacts = () => {
        bookUlElement.innerHTML = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(contactData => {
                Object.values(contactData).map(contact => { // Use map here instead of forEach
                    const person = contact.person;
                    const phone = contact.phone;
                    const personId = contact._id;

                    const personLiElement = document.createElement('li');
                    personLiElement.textContent = `${person}: ${phone}`;

                    const deleteBtnElement = document.createElement('button');
                    deleteBtnElement.id = personId;
                    deleteBtnElement.textContent = 'Delete';

                    deleteBtnElement.addEventListener('click', deleteContact);

                    personLiElement.appendChild(deleteBtnElement);
                    bookUlElement.appendChild(personLiElement);
                })
            })
            .catch(err => console.error(err.message));
    }

    const deleteContact = (e) => {
        const targetBtn = e.target;
        const entryKey = targetBtn.id;

        fetch(`${baseUrl}/${entryKey}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    console.log('No such contact!'); // In case of invalid request
                    return;
                }

                targetBtn.parentElement.remove();
            })
            .catch(err => console.error(err.message));
    }

    const createContact = () => {
        const personInputElement = document.getElementById('person');
        const phoneInputElement = document.getElementById('phone');

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'person': personInputElement.value,
                'phone': phoneInputElement.value,
            })
        }).then(res => {
            if (!res.ok) {
                console.log('Failed to create contact!'); // In case of invalid request
                return;
            }

            loadContacts();
        }).catch(err => console.error(err.message));

        personInputElement.value = '';
        phoneInputElement.value = '';
    }

    loadBtnElement.addEventListener('click', loadContacts);
    createBtnElement.addEventListener('click', createContact);
}

attachEvents();

// 02 Async / Await syntax
async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadBtnElement = document.getElementById('btnLoad');
    const createBtnElement = document.getElementById('btnCreate');

    const bookUlElement = document.getElementById('phonebook');

    const loadContacts = async () => {
        try {
            bookUlElement.innerHTML = '';

            const res = await fetch(baseUrl);
            const contactData = await res.json();

            Object.values(contactData).map(contact => {
                const { person, phone, _id: personId } = contact;

                const personLiElement = document.createElement('li');
                personLiElement.textContent = `${person}: ${phone}`;

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.id = personId;
                deleteBtnElement.textContent = 'Delete';

                deleteBtnElement.addEventListener('click', deleteContact);

                personLiElement.appendChild(deleteBtnElement);
                bookUlElement.appendChild(personLiElement);
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteContact = async (e) => {
        const targetBtn = e.target;
        const entryKey = targetBtn.id;

        try {
            const res = await fetch(`${baseUrl}/${entryKey}`, { method: 'DELETE' });
            if (!res.ok) {
                console.log('No such contact!');
                return;
            }

            targetBtn.parentElement.remove();
        } catch (err) {
            console.error(err.message);
        }
    };

    const createContact = async () => {
        const personInputElement = document.getElementById('person');
        const phoneInputElement = document.getElementById('phone');

        try {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    'person': personInputElement.value,
                    'phone': phoneInputElement.value,
                })
            });

            if (!res.ok) {
                console.log('Failed to create contact!');
                return;
            }

            await loadContacts();
        } catch (err) {
            console.error(err.message);
        }

        personInputElement.value = '';
        phoneInputElement.value = '';
    };

    loadBtnElement.addEventListener('click', loadContacts);
    createBtnElement.addEventListener('click', createContact);
}

attachEvents();
