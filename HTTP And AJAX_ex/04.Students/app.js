// 01 Promise syntax
function attachEvents() {
    baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const tableBodyElement = document.querySelector('table#results tbody');
    const submitBtnElement = document.getElementById('submit');

    const populateTable = function(data) {
        tableBodyElement.innerHTML = '';

        Object.values(data).forEach(student => {
            const trElement = document.createElement('tr');

            Object.values(student).slice(0, -1).forEach(value => { // Use slice to omit students id
                const tdElement = document.createElement('td');
                tdElement.textContent = value;
                trElement.appendChild(tdElement);
            });

            tableBodyElement.appendChild(trElement);
        });
    }

    const addStudent = function() {
        const firstNameInputElement = document.querySelector('input[type=text][name=firstName]');
        const lastNameInputElement = document.querySelector('input[type=text][name=lastName]');
        const facNumberInputElement = document.querySelector('input[type=text][name=facultyNumber]');
        const gradeInputElement = document.querySelector('input[type=text][name=grade]');

        if (!firstNameInputElement.value || !lastNameInputElement.value || 
            !facNumberInputElement.value || !gradeInputElement.value) {
            console.log('Please fill in all fields.'); // Ensure all fields are filled
            return;
        }

        const newStudent = {
            firstName: firstNameInputElement.value,
            lastName: lastNameInputElement.value,
            facultyNumber: facNumberInputElement.value,
            grade: gradeInputElement.value,
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        }).then(res => {
            if (!res.ok) {
                throw new Error('Failed to create student!'); // Handle error cases this time using Error class
            }

            return res.json();
        }).then(() => {
            loadStudents()
        }).catch(err => console.error(err.message));

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        facNumberInputElement.value = '';
        gradeInputElement.value = '';
    }

    const loadStudents = function() {
        fetch(baseUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch students data.'); // Handle error cases this time using Error class
                }

                return res.json();
            })
            .then(data => populateTable(data))
            .catch(err => console.error(err.message));
    }

    submitBtnElement.addEventListener('click', addStudent);
    loadStudents();

}

attachEvents(); 

// 02 Async / Await syntax
async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
    const tableBodyElement = document.querySelector('table#results tbody');
    const submitBtnElement = document.getElementById('submit');

    const populateTable = function(data) {
        tableBodyElement.innerHTML = '';

        Object.values(data).forEach(student => {
            const trElement = document.createElement('tr');

            Object.values(student).slice(0, -1).forEach(value => { // Use slice to omit students id
                const tdElement = document.createElement('td');
                tdElement.textContent = value;
                trElement.appendChild(tdElement);
            });

            tableBodyElement.appendChild(trElement);
        });
    }

    const addStudent = async function() {
        const firstNameInputElement = document.querySelector('input[type=text][name=firstName]');
        const lastNameInputElement = document.querySelector('input[type=text][name=lastName]');
        const facNumberInputElement = document.querySelector('input[type=text][name=facultyNumber]');
        const gradeInputElement = document.querySelector('input[type=text][name=grade]');

        if (!firstNameInputElement.value || !lastNameInputElement.value || 
            !facNumberInputElement.value || !gradeInputElement.value) {
            console.log('Please fill in all fields.'); // Ensure all fields are filled
            return;
        }

        const newStudent = {
            firstName: firstNameInputElement.value,
            lastName: lastNameInputElement.value,
            facultyNumber: facNumberInputElement.value,
            grade: gradeInputElement.value,
        };

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });

            if (!response.ok) {
                throw new Error('Failed to create student!');
            }

            loadStudents();
        } catch (err) {
            console.error(err.message);
        }

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        facNumberInputElement.value = '';
        gradeInputElement.value = '';
    }

    const loadStudents = async function() {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch students data.');
            }

            const data = await response.json();
            populateTable(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    submitBtnElement.addEventListener('click', addStudent);
    await loadStudents();
}

attachEvents();
