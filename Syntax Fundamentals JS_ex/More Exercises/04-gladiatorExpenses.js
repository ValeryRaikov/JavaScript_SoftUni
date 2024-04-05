function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 12 == 0) {
            expenses += armorPrice + shieldPrice + swordPrice + helmetPrice;
            continue;
        }

        if (i % 6 == 0) {
            expenses += shieldPrice + swordPrice + helmetPrice;
            continue;
        }

        if (i % 3 == 0)
            expenses += swordPrice;

        if (i % 2 == 0)
            expenses += helmetPrice;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

// calculateExpenses(23, 12.50 ,21.50 ,40 ,200);