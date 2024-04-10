// 01 Easy solution
/* window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', () => {
        const expenseTypeElement = document.getElementById('expense');
        const amountElement = document.getElementById('amount');
        const dateElement = document.getElementById('date');

        const expenseType = document.getElementById('expense').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;

        if (!expenseType || !amount || !date) {
            return;
        }

        const typePElement = document.createElement('p');
        typePElement.textContent = `Type: ${expenseType}`;

        const amountPElement = document.createElement('p');
        amountPElement.textContent = `Amount: ${amount}$`;

        const datePElement = document.createElement('p');
        datePElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(typePElement);
        articleElement.appendChild(amountPElement);
        articleElement.appendChild(datePElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'edit';
        editBtnElement.classList.add('btn', 'edit');

        const okBtnElement = document.createElement('button');
        okBtnElement.textContent = 'ok';
        okBtnElement.classList.add('btn', 'ok');

        const btnContainerElement = document.createElement('div');
        btnContainerElement.classList.add('buttons');
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(okBtnElement);

        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(btnContainerElement);

        const previewUlElement = document.getElementById('preview-list');
        previewUlElement.appendChild(liElement);

        editBtnElement.addEventListener('click', () => {
            previewUlElement.innerHTML = '';

            expenseTypeElement.value = expenseType;
            amountElement.value = amount;
            dateElement.value = date;

            addBtnElement.disabled = false;
        });

        okBtnElement.addEventListener('click', () => {
            previewUlElement.innerHTML = '';

            const expensesULElement = document.getElementById('expenses-list');

            liElement.removeChild(btnContainerElement);

            expensesULElement.appendChild(liElement);

            addBtnElement.disabled = false;
        });

        addBtnElement.disabled = true;

        expenseTypeElement.value = '';
        amountElement.value = '';
        dateElement.value = '';
    });

    const deleteBtnElement = document.querySelector('button.btn.delete');

    deleteBtnElement.addEventListener('click', () => {
        location.reload(true);
    });
}

solve(); */

// 02 Complex solution
window.addEventListener("load", solve);

function solve() {
    function createElement(tag, textContent = '', classNames = []) {
        const element = document.createElement(tag);
        if (textContent) {
            element.textContent = textContent;
        }
        if (classNames.length) {
            classNames.forEach(className => element.classList.add(className));
        }
        return element;
    }
    
    function createExpenseItem(expenseType, amount, date) {
        const articleElement = createElement('article');
        articleElement.appendChild(createElement('p', `Type: ${expenseType}`));
        articleElement.appendChild(createElement('p', `Amount: ${amount}$`));
        articleElement.appendChild(createElement('p', `Date: ${date}`));
    
        const editBtnElement = createElement('button', 'edit', ['btn', 'edit']);
        const okBtnElement = createElement('button', 'ok', ['btn', 'ok']);
    
        const btnContainerElement = createElement('div', '', ['buttons']);
        btnContainerElement.appendChild(editBtnElement);
        btnContainerElement.appendChild(okBtnElement);
    
        const liElement = createElement('li', '', ['expense-item']);
        liElement.appendChild(articleElement);
        liElement.appendChild(btnContainerElement);
    
        return { liElement, editBtnElement, okBtnElement };
    }
    
    function addExpenseItem() {
        const expenseTypeElement = document.getElementById('expense');
        const amountElement = document.getElementById('amount');
        const dateElement = document.getElementById('date');
    
        const expenseType = expenseTypeElement.value;
        const amount = amountElement.value;
        const date = dateElement.value;
    
        if (!expenseType || !amount || !date) {
            return;
        }
    
        const { liElement, editBtnElement, okBtnElement } = createExpenseItem(expenseType, amount, date);
    
        const previewUlElement = document.getElementById('preview-list');
        previewUlElement.appendChild(liElement);
    
        editBtnElement.addEventListener('click', () => {
            expenseTypeElement.value = expenseType;
            amountElement.value = amount;
            dateElement.value = date;
            previewUlElement.innerHTML = '';
        });
    
        okBtnElement.addEventListener('click', () => {
            const expensesULElement = document.getElementById('expenses-list');
            liElement.querySelector('.buttons').remove();
            expensesULElement.appendChild(liElement);
            previewUlElement.innerHTML = '';
        });
    
        expenseTypeElement.value = '';
        amountElement.value = '';
        dateElement.value = '';
    }
    
    function resetPage() {
        location.reload(true);
    }
    
    document.getElementById('add-btn').addEventListener('click', addExpenseItem);
    document.querySelector('button.btn.delete').addEventListener('click', resetPage);    
}

solve();