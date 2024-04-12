/* const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsBtnElement = document.getElementById('load-vacations');
const addVacationBtnElement = document.getElementById('add-vacation');
const editVacationBtnElement = document.getElementById('edit-vacation');

const getInputFileds = () => {
    return {
        name: document.getElementById('name').value,
        days: document.getElementById('num-days').value,
        date: document.getElementById('from-date').value,
    }
}

const clearInputFields = () => {
    document.getElementById('name').value = '';
    document.getElementById('num-days').value = '';
    document.getElementById('from-date').value = '';
}

const loadVacations = async () => {
    try {
        const res = await fetch(baseUrl);

        if (!res.ok) {
            throw new Error('Fetch error!');
        }

        const vacationData = await res.json();

        Object.values(vacationData).forEach(vacation => {
            const nameH2Element = document.createElement('h2');
            nameH2Element.textContent = vacation.name;
            const dateH3Element = document.createElement('h3');
            dateH3Element.textContent = vacation.date;
            const daysH3Element = document.createElement('h3');
            daysH3Element.textContent = vacation.days;

            const changeBtnElement = document.createElement('button');
            changeBtnElement.classList.add('change-btn');
            changeBtnElement.textContent = 'Change';

            const doneBtnElement = document.createElement('button');
            doneBtnElement.classList.add('done-btn');
            doneBtnElement.textContent = 'Done';

            const divElement = document.createElement('div');
            divElement.classList.add('container');
            divElement.appendChild(nameH2Element);
            divElement.appendChild(dateH3Element);
            divElement.appendChild(daysH3Element);
            divElement.appendChild(changeBtnElement);
            divElement.appendChild(doneBtnElement);

            const fragment = document.createDocumentFragment();
            fragment.appendChild(divElement);

            const listDivElement = document.getElementById('list');
            listDivElement.appendChild(fragment);

            editVacationBtnElement.setAttribute('disabled', 'disabled');

            changeBtnElement.addEventListener('click', () => {
                divElement.remove();

                document.getElementById('name').value = vacation.name;
                document.getElementById('num-days').value = vacation.days;
                document.getElementById('from-date').value = vacation.date;

                editVacationBtnElement.removeAttribute('disabled');
                addVacationBtnElement.setAttribute('disabled', 'disabled');
            });

            editVacationBtnElement.addEventListener('click', async () => {
                const { name, days, date } = getInputFileds();

                try {
                    const res = await fetch(`${baseUrl}/${vacation._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name, days, date,
                        }),
                    });

                    if (!res.ok) {
                        throw new Error('Fetch error!');
                    }

                    editVacationBtnElement.setAttribute('disabled', 'disabled');
                    addVacationBtnElement.removeAttribute('disabled');

                    await loadVacations();
                    clearInputFields();

                } catch (err) {
                    console.error(err);
                }
            });

            doneBtnElement.addEventListener('click', async () => {
                try {
                    const res = await fetch(`${baseUrl}/${vacation._id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!res.ok) {
                        throw new Error('Fetch error!');
                    }

                    await loadVacations();
                } catch (err) {
                    console.error(err);
                }
            });
        });
    } catch (err) {
        console.error(err);
    }
}

const addVacation = async () => {
    const { name, days, date } = getInputFileds();

    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, days, date,
            }),
        });

        if (!res.ok) {
            throw new Error('Fetch error!');
        }

        await loadVacations();
        clearInputFields();

    } catch (err) {
        console.error(err);
    }
}

loadVacationsBtnElement.addEventListener('click', loadVacations);
addVacationBtnElement.addEventListener('click', addVacation); */

const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsBtnElement = document.getElementById('load-vacations');
const addVacationBtnElement = document.getElementById('add-vacation');
const editVacationBtnElement = document.getElementById('edit-vacation');

const getInputFields = () => {
    return {
        name: document.getElementById('name').value,
        days: document.getElementById('num-days').value,
        date: document.getElementById('from-date').value,
    };
};

const clearInputFields = () => {
    document.getElementById('name').value = '';
    document.getElementById('num-days').value = '';
    document.getElementById('from-date').value = '';
};

const loadVacations = async () => {
    try {
        const res = await fetch(baseUrl);

        if (!res.ok) {
            throw new Error('Fetch error!');
        }

        const vacationData = await res.json();

        const listDivElement = document.getElementById('list');
        listDivElement.innerHTML = '';

        Object.values(vacationData).forEach(vacation => {
            const nameH2Element = document.createElement('h2');
            nameH2Element.textContent = vacation.name;
            const dateH3Element = document.createElement('h3');
            dateH3Element.textContent = vacation.date;
            const daysH3Element = document.createElement('h3');
            daysH3Element.textContent = vacation.days;

            const changeBtnElement = document.createElement('button');
            changeBtnElement.classList.add('change-btn');
            changeBtnElement.textContent = 'Change';

            const doneBtnElement = document.createElement('button');
            doneBtnElement.classList.add('done-btn');
            doneBtnElement.textContent = 'Done';

            const divElement = document.createElement('div');
            divElement.classList.add('container');
            divElement.appendChild(nameH2Element);
            divElement.appendChild(dateH3Element);
            divElement.appendChild(daysH3Element);
            divElement.appendChild(changeBtnElement);
            divElement.appendChild(doneBtnElement);

            listDivElement.appendChild(divElement);

            changeBtnElement.addEventListener('click', () => {
                editVacationBtnElement.removeAttribute('disabled');
                addVacationBtnElement.setAttribute('disabled', 'disabled');
                
                populateInputFields(vacation);
            });

            editVacationBtnElement.addEventListener('click', async () => {
                const { name, days, date } = getInputFields();
    
                try {
                    const res = await fetch(`${baseUrl}/${vacation._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name, days, date,
                        }),
                    });
    
                    if (!res.ok) {
                        throw new Error('Fetch error!');
                    }
    
                    editVacationBtnElement.setAttribute('disabled', 'disabled');
                    addVacationBtnElement.removeAttribute('disabled');
    
                    await loadVacations();
                    clearInputFields();
                } catch (err) {
                    console.error(err);
                }
            });

            doneBtnElement.addEventListener('click', async () => {
                try {
                    const res = await fetch(`${baseUrl}/${vacation._id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!res.ok) {
                        throw new Error('Fetch error!');
                    }

                    await loadVacations();
                } catch (err) {
                    console.error(err);
                }
            });
        });
    } catch (err) {
        console.error(err);
    }
};

const populateInputFields = (vacation) => {
    document.getElementById('name').value = vacation.name;
    document.getElementById('num-days').value = vacation.days;
    document.getElementById('from-date').value = vacation.date;
};

const addVacation = async () => {
    const { name, days, date } = getInputFields();

    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, days, date,
            }),
        });

        if (!res.ok) {
            throw new Error('Fetch error!');
        }

        await loadVacations();
        clearInputFields();
    } catch (err) {
        console.error(err);
    }
};

loadVacationsBtnElement.addEventListener('click', loadVacations);
addVacationBtnElement.addEventListener('click', addVacation);
