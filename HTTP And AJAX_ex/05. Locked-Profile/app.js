// 01
function lockedProfile() {
    function createProfileCard(dataKey, num) {
        const profileDivElement = document.createElement('div');
        profileDivElement.classList.add('profile');

        const imgElement = document.createElement('img');
        imgElement.src = './iconProfile2.png';
        imgElement.classList.add('userIcon');
        profileDivElement.appendChild(imgElement);

        const lockLabelElement = document.createElement('label');
        lockLabelElement.textContent = 'Lock';
        profileDivElement.appendChild(lockLabelElement);
        
        const inputLockElement = document.createElement('input');
        inputLockElement.type = 'radio';
        inputLockElement.name = `user${num}Locked`;
        inputLockElement.value = 'lock';
        inputLockElement.checked = true;
        profileDivElement.appendChild(inputLockElement);

        const unlockLabelElement = document.createElement('label');
        unlockLabelElement.textContent = 'Unlock';
        profileDivElement.appendChild(unlockLabelElement);

        const inputUnlockElement = document.createElement('input');
        inputUnlockElement.type = 'radio';
        inputUnlockElement.name = `user${num}Locked`;
        inputUnlockElement.value = 'unlock';
        profileDivElement.appendChild(inputUnlockElement);

        profileDivElement.appendChild(document.createElement('br'));
        profileDivElement.appendChild(document.createElement('hr'));

        const userLabelElement = document.createElement('label');
        userLabelElement.textContent = 'Username';
        profileDivElement.appendChild(userLabelElement);

        const inputUserNameElement = document.createElement('input');
        inputUserNameElement.type = 'text';
        inputUserNameElement.name = `user${num}Username`;
        inputUserNameElement.value = dataKey.username;
        inputUserNameElement.disabled = true;
        inputUserNameElement.readOnly = true;
        profileDivElement.appendChild(inputUserNameElement);

        const userDivElement = document.createElement('div');
        userDivElement.classList.add('hiddenInfo');
        userDivElement.appendChild(document.createElement('hr'));

        const emailLabelElement = document.createElement('label');
        emailLabelElement.textContent = 'Email:';
        userDivElement.appendChild(emailLabelElement);

        const inputEmailElement = document.createElement('input');
        inputEmailElement.type = 'email';
        inputEmailElement.name = `user${num}Email`;
        inputEmailElement.value = dataKey.email;
        inputEmailElement.disabled = true;
        inputEmailElement.readOnly = true;
        userDivElement.appendChild(inputEmailElement);

        const ageLabelElement = document.createElement('label');
        ageLabelElement.textContent = 'Age:';
        userDivElement.appendChild(ageLabelElement);

        const inputAgeElement = document.createElement('input');
        inputAgeElement.type = 'text';
        inputAgeElement.name = `user${num}Age`;
        inputAgeElement.value = dataKey.age;
        inputAgeElement.disabled = true;
        inputAgeElement.readOnly = true;
        userDivElement.appendChild(inputAgeElement);

        profileDivElement.appendChild(userDivElement);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Show more';
        profileDivElement.appendChild(buttonElement);
        
        buttonElement.addEventListener('click', () => {       
            if (inputUnlockElement.checked) {
                let displayStyle = '';

                if (buttonElement.textContent === 'Show more') {
                    displayStyle = 'block';
                    buttonElement.textContent = 'Hide it';
                } else  {
                    displayStyle = 'none';
                    buttonElement.textContent = 'Show more';
                }

                inputEmailElement.style.display = displayStyle;
                emailLabelElement.style.display = displayStyle;
                inputAgeElement.style.display = displayStyle;
                ageLabelElement.style.display = displayStyle;
            }
        });
        
        return profileDivElement;
    }

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    
    function createProfiles() {
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let count = 0;

                for (const key in data) {
                    count++;
                    const profileCard = createProfileCard(data[key], count);
                    mainElement.appendChild(profileCard); 
                }
            })
            .catch(error => console.error(error.message));
    }

    createProfiles();
}

lockedProfile();