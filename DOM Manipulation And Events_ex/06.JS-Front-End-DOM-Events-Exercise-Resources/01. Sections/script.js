// 01
function create(words) {
    const divContentElement = document.getElementById('content');

    const divElements = words.map(word => {
        const pElement = document.createElement('p');
        pElement.textContent = word;
        pElement.style.display = 'none';

        const divElement = document.createElement('div');
        divElement.appendChild(pElement);

        divElement.addEventListener('click', (e) => {
            pElement.style.display = 'block';
        });

        return divElement;
    });

    divElements.forEach(divElement => divContentElement.appendChild(divElement));
}

// 02
function create(words) {
    const divContentElement = document.getElementById('content');

    let divElements = [];
    for (const word of words) {
        const pElement = document.createElement('p');
        pElement.textContent = word;
        pElement.style.display = 'none';

        const divElement = document.createElement('div');
        divElement.appendChild(pElement);

        divElement.addEventListener('click', (e) => {
            pElement.style.display = 'block';
        });

        divElements.push(divElement);
    }

    divElements.forEach(divElement => divContentElement.appendChild(divElement));
}

// 03
function create(words) {
    const divContentElement = document.getElementById('content');

    const divElements = words.map(word => {
          const pElement = document.createElement('p');
          pElement.textContent = word;
          pElement.style.display = 'none';
 
          const divElement = document.createElement('div');
          divElement.appendChild(pElement);
 
          return divElement;
       });

    divElements.forEach(divElement => {
        divElement.addEventListener('click', (e) => {
            const pElement = divElement.querySelector('p');
            pElement.style.display = 'block';
        });
    });   

    // contentElement.append(...divElements); -> Doesn't work in judge
    // divElements.forEach(divElement => contentElement.appendChild(divElement)); -> Not efficient 
    
    // Using document fragment
    const divElementsFragment = document.createDocumentFragment();
    divElements.forEach(divElement => divElementsFragment.appendChild(divElement)); // Not efficient 
    divContentElement.appendChild(divElementsFragment);
 
    // Attach "multiple" events using event delegation
    divContentElement.addEventListener('click', (e) => {
       if (e.target.tagName === 'DIV') {
          const pElement = e.target.querySelector('p');
          pElement.style.display = 'block';
       }
    });
}