window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');

    addBtnElement.addEventListener('click', () => {
        const nameInputElement = document.getElementById('name');
        const phoneInputElement = document.getElementById('phone');
        const categoryInputElement = document.getElementById('category');

        const name = nameInputElement.value;
        const phone = phoneInputElement.value;
        const category = categoryInputElement.value;

        if (!name || !phone || !category) {
            return;
        }

        const checkListUlElement = document.getElementById('check-list');

        const namePElement = document.createElement('p');
        namePElement.textContent = `name:${name}`;
        const phonePElement = document.createElement('p');
        phonePElement.textContent = `phone:${phone}`;
        const categoryPElement = document.createElement('p');
        categoryPElement.textContent = `category:${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(namePElement);
        articleElement.appendChild(phonePElement);
        articleElement.appendChild(categoryPElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');
        const saveBtnElement = document.createElement('button');
        saveBtnElement.classList.add('save-btn');

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editBtnElement);
        buttonsDivElement.appendChild(saveBtnElement);

        const liElement = document.createElement('li');
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsDivElement);

        checkListUlElement.appendChild(liElement);

        nameInputElement.value = '';
        phoneInputElement.value = '';
        categoryInputElement.value = '';

        editBtnElement.addEventListener('click', () => {
            nameInputElement.value = name;
            phoneInputElement.value = phone;
            categoryInputElement.value = category;

            liElement.remove();
        });

        saveBtnElement.addEventListener('click', () => {
            const contactListUlElement = document.getElementById('contact-list');

            checkListUlElement.removeChild(liElement);
            
            liElement.removeChild(buttonsDivElement);

            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.classList.add('del-btn');

            liElement.appendChild(deleteBtnElement);

            contactListUlElement.appendChild(liElement);

            deleteBtnElement.addEventListener('click', () => {
                liElement.remove();
            });
        });
    });
}
  
solve();