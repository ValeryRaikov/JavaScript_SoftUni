// 01
function operateCatalogue(productsData) {
    let catalogue = {};

    const initials = new Set();

    for (const productData of productsData) {
        const [productName, price] = productData.split(' : ');
        const initial = productName[0];

        catalogue[productName] = Number(price);
        initials.add(initial);
    }

    const sortedCatalogue = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]));

    const sortedInitials = Array.from(initials).sort();

    for (const initial of sortedInitials) {
        console.log(initial);

        for (const [productName, price] of sortedCatalogue) {
            if (productName[0] === initial)
                console.log(`  ${productName}: ${price}`);
        }
    }
}

// 02
function operateCatalogue(productsData) {
    let catalog = {};

    for (const productData of productsData) {
        const [productName, price] = productData.split(' : ');
        const initial = productName[0];

        if (!catalog.hasOwnProperty(initial)) {
            catalog[initial] = [];
        }

        catalog[initial].push({
            name: productName, 
            price: Number(price),
        });
    }

    Object.entries(catalog)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([initial, products]) => {
            console.log(initial);

            products
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(product => console.log(`  ${product.name}: ${product.price}`));
        });
}

// 03
function operateCatalogue(productsData) {
    const catalogueMap = new Map();

    for (const productData of productsData) {
        const [productName, price] = productData.split(' : ');
        const initial = productName[0];

        if (!catalogueMap.has(initial)) {
            catalogueMap.set(initial, []);
        }

        catalogueMap.get(initial).push({
            name: productName,
            price: Number(price),
        });
    }

    Array.from(catalogueMap.keys()).sort()
        .forEach(initial => {
            console.log(initial);

            catalogueMap.get(initial)
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(({ name, price }) => {
                    console.log(`  ${name}: ${price}`);
            });
    });
}


operateCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);