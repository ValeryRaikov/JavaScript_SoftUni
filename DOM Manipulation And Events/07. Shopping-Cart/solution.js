// 01
function solve() {
    const addProductButtonElements = document.querySelectorAll('button.add-product');
    const checkoutButtonElement = document.querySelector('.checkout');
    const textAreaElement = document.querySelector('textarea');

    let totalPrice = 0;
    let uniqueProducts = {};

    for (const buttonElement of addProductButtonElements) {
        const productElement = buttonElement.parentElement.parentElement;
        // const productElement = buttonElement.closest('.product'); -> This doesn't work in judge

        buttonElement.addEventListener('click', (e) => {
            const productTitle = productElement.querySelector('.product-title').textContent;
            const productPrice = Number(productElement.querySelector('.product-line-price').textContent);

            totalPrice += productPrice;
            uniqueProducts[productTitle] = true;

            textAreaElement.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    }

    checkoutButtonElement.addEventListener('click', (e) => {
        Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
        e.target.setAttribute('disabled', 'disabled');

        const listOfProducts = Object.keys(uniqueProducts).join(', ');
        textAreaElement.textContent += `You bought ${listOfProducts} for ${totalPrice.toFixed(2)}.`
    });
}

// 02
function solve() {
    const addProductButtonElements = document.getElementsByClassName('add-product');
    const checkoutButtonElement = document.getElementsByClassName('checkout')[0];
    const textAreaElement = document.querySelector('textarea');

    let totalPrice = 0;
    let uniqueProducts = new Set();

   Array.from(addProductButtonElements).forEach(buttonElement => {
        const productElement = buttonElement.closest('.product');

        buttonElement.addEventListener('click', (e) => {
            const productTitle = productElement.querySelector('.product-title').textContent;
            const productPrice = Number(productElement.querySelector('.product-line-price').textContent);

            totalPrice += productPrice;
            uniqueProducts.add(productTitle);

            textAreaElement.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
        });
    });

    checkoutButtonElement.addEventListener('click', (e) => {
        Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'))
        e.target.setAttribute('disabled', 'disabled');

        textAreaElement.textContent += `You bought ${Array.from(uniqueProducts).join(', ')} for ${totalPrice.toFixed(2)}.`
    });
}