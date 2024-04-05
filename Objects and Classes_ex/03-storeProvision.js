// 01
function printProvisions(stock, delivery) {
    let store = {};

    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        const quantity = Number(stock[i + 1]);

        store[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = Number(delivery[i + 1]);

        if (!store[product]) {
            store[product] = 0;
        }

        store[product] += quantity;
    }

    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

// 02
function printProvisions(stock, delivery) {
    const getProducts = (array) => {
        const products = {};

        for (let i = 0; i < array.length; i += 2) {
            const product = array[i];
            const quantity = Number(array[i + 1]);

            if (!products[product]) {
                products[product] = 0;
            }

            products[product] += quantity
        }

        return products;
    }

    // const store = getProducts(stock.concat(delivery));
    const store = getProducts([...stock, ...delivery]);

    Object.entries(store).forEach(([product, quantity]) => console.log(`${product} -> ${quantity}`));
}

/* printProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]); */