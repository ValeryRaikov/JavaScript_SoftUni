// 01 Easy solution
window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');

    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const taskListUlElement = document.getElementById('task-list');
    const doneListUlElement = document.getElementById('done-list');

    const clearInputFields = () => {
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    }

    addBtnElement.addEventListener('click', () => {
        const placeInput = placeInputElement.value;
        const actionInput = actionInputElement.value;
        const personInput = personInputElement.value;

        if (!placeInput || !actionInput || !personInput) {
            return;
        }

        const placePElement = document.createElement('p');
        placePElement.textContent = `Place: ${placeInput}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action: ${actionInput}`;

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person: ${personInput}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit');
        editBtnElement.textContent = 'Edit';

        const doneBtnElement = document.createElement('button');
        doneBtnElement.classList.add('done');
        doneBtnElement.textContent = 'Done';

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('buttons');
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(doneBtnElement);

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(btnContainerElement);

        taskListUlElement.appendChild(liElement);

        clearInputFields();

        editBtnElement.addEventListener('click', () => {
            placeInputElement.value = placeInput;
            actionInputElement.value = actionInput;
            personInputElement.value = personInput;

            liElement.remove();
        });

        doneBtnElement.addEventListener('click', () => {
            taskListUlElement.removeChild(liElement);

            liElement.removeChild(btnContainerElement);

            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('delete');
            deleteBtnElement.textContent = 'Delete';

            liElement.appendChild(deleteBtnElement);

            doneListUlElement.appendChild(liElement);

            deleteBtnElement.addEventListener('click', () => {
                liElement.remove();
            });
        });
    })
}

solve();

// 02 Should fix when I have time!
window.addEventListener("load", setup);

function setup() {
    const addBtnElement = document.getElementById('add-btn');
    addBtnElement.addEventListener('click', handleAddButtonClick);

    function handleAddButtonClick() {
        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        const placeInput = placeInputElement.value;
        const actionInput = actionInputElement.value;
        const personInput = personInputElement.value;

        if (!placeInput || !actionInput || !personInput) {
            return;
        }

        const taskListItem = createTaskListItem(placeInput, actionInput, personInput);
        taskListUlElement.appendChild(taskListItem);

        clearInputFields(placeInputElement, actionInputElement, personInputElement);
    }

    function createTaskListItem(place, action, person) {
        const placePElement = document.createElement('p');
        placePElement.textContent = `Place: ${place}`;

        const actionPElement = document.createElement('p');
        actionPElement.textContent = `Action: ${action}`;

        const personPElement = document.createElement('p');
        personPElement.textContent = `Person: ${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit');
        editBtnElement.textContent = 'Edit';

        const doneBtnElement = document.createElement('button');
        doneBtnElement.classList.add('done');
        doneBtnElement.textContent = 'Done';

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('buttons');
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(doneBtnElement);

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(btnContainerElement);

        editBtnElement.addEventListener('click', handleEditButtonClick);
        doneBtnElement.addEventListener('click', handleDoneButtonClick);

        return liElement;
    }

    function handleEditButtonClick(e) {
        const taskListItem = e.currentTarget.closest('li');
        const [placePElement, actionPElement, personPElement] = taskListItem.querySelectorAll('p');

        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        placeInputElement.value = placePElement.textContent.split(': ')[1];
        actionInputElement.value = actionPElement.textContent.split(': ')[1];
        personInputElement.value = personPElement.textContent.split(': ')[1];

        taskListItem.remove();
    }

    function handleDoneButtonClick(e) {
        const taskListItem = e.currentTarget.closest('li');
        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete');
        deleteBtnElement.textContent = 'Delete';

        taskListItem.removeChild(e.currentTarget.nextElementSibling);
        taskListItem.removeChild(e.currentTarget);

        doneListUlElement.appendChild(taskListItem);
        taskListItem.appendChild(deleteBtnElement);

        deleteBtnElement.addEventListener('click', () => {
            taskListItem.remove();
        });
    }

    function clearInputFields(...inputElements) {
        inputElements.forEach(inputElement => {
            inputElement.value = '';
        });
    }

    const taskListUlElement = document.getElementById('task-list');
    const doneListUlElement = document.getElementById('done-list');
}

solve();