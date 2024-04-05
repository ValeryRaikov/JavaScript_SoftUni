// 01
function calculateTotalPrice(product, quantity) {
    function getProductPrice() {
        switch (product) {
            case 'coffee': 
                return 1.5;
            case 'water': 
                return 1;
            case 'coke': 
                return 1.4;
            case 'snacks': 
                return 2;
        }
    }

    const totalPrice = getProductPrice() * quantity;

    console.log(totalPrice.toFixed(2));
}

// 02
function calculateTotalPrice(product, quantity) {
    const productPrices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    }

    const totalPrice = productPrices[product] * quantity;

    console.log(totalPrice.toFixed(2));
}

// 03
function calculateTotalPrice(product, quantity) {
    const productPrices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    }

    const calculateForSpecificQuantity = quantity => quantity * productPrices[product];

    console.log(calculateForSpecificQuantity(quantity).toFixed(2));
}

// calculateTotalPrice("coffee", 2);