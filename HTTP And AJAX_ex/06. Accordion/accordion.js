// 01 Promise syntax
function solution() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles';
    const mainSectionElement = document.getElementById('main');

    fetch(`${BASE_URL}/list`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch article list.');
            }
            return response.json();
        })
        .then(articleData => {
            articleData.forEach(dataObj => {
                const articleDivElement = document.createElement('div');
                articleDivElement.classList.add('accordion');

                const headDivElement = document.createElement('div');
                headDivElement.classList.add('head');

                const headSpanElement = document.createElement('span');
                headSpanElement.textContent = dataObj.title;

                headDivElement.appendChild(headSpanElement);

                const btnElement = document.createElement('button');
                btnElement.classList.add('button');
                btnElement.id = dataObj._id;
                btnElement.textContent = 'More';
                btnElement.style.textTransform = 'uppercase';
                btnElement.style.fontWeight = 'bold';

                headDivElement.appendChild(btnElement);
                articleDivElement.appendChild(headDivElement);
                mainSectionElement.appendChild(articleDivElement);

                fetch(`${BASE_URL}/details/${btnElement.id}`)
                    .then(detailsResponse => {
                        if (!detailsResponse.ok) {
                            throw new Error('Failed to fetch article details.');
                        }
                        return detailsResponse.json();
                    })
                    .then(detailsData => {
                        const extraDivElement = document.createElement('div');
                        extraDivElement.classList.add('extra');

                        const contentPElement = document.createElement('p');
                        contentPElement.textContent = detailsData.content;

                        extraDivElement.appendChild(contentPElement);
                        articleDivElement.appendChild(extraDivElement);

                        btnElement.addEventListener('click', () => {
                            const hiddenDivElement = articleDivElement.querySelector('.extra');

                            if (btnElement.textContent === 'More') {
                                hiddenDivElement.style.display = 'block';
                                btnElement.textContent = 'Less';
                            } else {
                                hiddenDivElement.style.display = 'none';
                                btnElement.textContent = 'More';
                            }
                        });
                    })
                    .catch(error => console.error(error.message));
            });
        })
        .catch(error => console.error(error.message));
}

solution();

// 02 Async / Await syntax
async function solution() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles';
    const mainSectionElement = document.getElementById('main');

    try {
        const response = await fetch(`${BASE_URL}/list`);
        const articleData = await response.json();

        for (const dataObj of articleData) {
            const articleDivElement = document.createElement('div');
            articleDivElement.classList.add('accordion');
            
            const headDivElement = document.createElement('div');
            headDivElement.classList.add('head');

            const headSpanElement = document.createElement('span');
            headSpanElement.textContent = dataObj.title;

            headDivElement.appendChild(headSpanElement);
            
            const btnElement = document.createElement('button');
            btnElement.classList.add('button');
            btnElement.id = dataObj._id;
            btnElement.textContent = 'More';
            btnElement.style.textTransform = 'uppercase';
            btnElement.style.fontWeight = 'bold';

            headDivElement.appendChild(btnElement);
            articleDivElement.appendChild(headDivElement);
            mainSectionElement.appendChild(articleDivElement);

            const detailsResponse = await fetch(`${BASE_URL}/details/${btnElement.id}`);
            const detailsData = await detailsResponse.json();

            const extraDivElement = document.createElement('div');
            extraDivElement.classList.add('extra');

            const contentPElement = document.createElement('p');
            contentPElement.textContent = detailsData.content;

            extraDivElement.appendChild(contentPElement);
            articleDivElement.appendChild(extraDivElement);

            btnElement.addEventListener('click', () => {
                const hiddenDivElement = articleDivElement.querySelector('.extra');

                if (btnElement.textContent === 'More') {
                    hiddenDivElement.style.display = 'block';
                    btnElement.textContent = 'Less';
                } else {
                    hiddenDivElement.style.display = 'none';
                    btnElement.textContent = 'More';
                }         
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}

solution();