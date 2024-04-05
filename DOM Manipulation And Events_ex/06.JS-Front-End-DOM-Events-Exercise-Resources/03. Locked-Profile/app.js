// 01
function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');

        showButtonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return;
            }

            const additionalInfoElement = showButtonElement.previousElementSibling;

            if (showButtonElement.textContent === 'Show more') {
                additionalInfoElement.style.display = 'block';
                showButtonElement.textContent = 'Hide it';
            } else {
                additionalInfoElement.style.display = 'none';
                showButtonElement.textContent = 'Show more';
            }
        });
    }
}

function lockedProfile() {
    const mainElement = document.querySelector("main#main");
    mainElement.addEventListener("click",showMore);
 
    function showMore(e) {
        if (e.target.tagName !== "BUTTON") {
            return;
        }

        const locked = e.target.parentElement.querySelector("input[type='radio']:checked").value;
        if(locked === 'lock') {
            return;
        }

        e.target.textContent = e.target.textContent === "Show more" ? "Hide it": "Show more";

        const hiddenContentElement = e.target.previousElementSibling;
        hiddenContentElement.style.display = e.target.textContent === "Hide it" ? "block": "none";
    }
}