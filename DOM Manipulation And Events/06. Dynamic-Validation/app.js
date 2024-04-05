// 01
function validate() {
    const emailInputField = document.getElementById('email');
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInputField.addEventListener('change', (e) => {
        if (!emailPattern.test(e.target.value)) {
            emailInputField.classList.add('error');
            return;
        }

        emailInputField.classList.remove('error');
    });
}

// 02
function validate() {
    const emailInputField = document.getElementById('email');
    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInputField.addEventListener('change', (e) => {
        if (e.target.value.match(emailPattern) === null) {
            emailInputField.classList.add('error');
        } else {
            emailInputField.classList.remove('error');
        }
    });
}