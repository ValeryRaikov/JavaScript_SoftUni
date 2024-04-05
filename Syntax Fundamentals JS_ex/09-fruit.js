function calculateMoney(fruit, grams, price) {
    let finalMoney = grams / 1000 * price;

    console.log(`I need $${finalMoney.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

// calculateMoney('apple', 1563, 2.35);