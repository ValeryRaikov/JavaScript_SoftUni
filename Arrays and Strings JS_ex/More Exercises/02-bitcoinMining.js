function workForBitcoin(goldValues) {
    const bitcoinPrice = 11949.16;
    const goldGramPrice = 67.51;

    let totalIncome = 0;
    let totalBitcoins = 0;
    let firstDayOfBitcoinPurchase = 0;
    let days = 1;
    while (goldValues.length > 0) {
        let gold = goldValues.shift();

        if (days % 3 === 0)
            gold *= 0.7;

        totalIncome += goldGramPrice * gold;

        if (totalIncome >= bitcoinPrice) {
            const purchasedBitcoins = Math.floor(totalIncome / bitcoinPrice);

            totalBitcoins += purchasedBitcoins;
            totalIncome -= purchasedBitcoins * bitcoinPrice;

            if (totalBitcoins >= 1 && firstDayOfBitcoinPurchase === 0)
                firstDayOfBitcoinPurchase = days;
        }

        days++;
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);

    if (totalBitcoins !== 0)
        console.log(`Day of the first purchased bitcoin: ${firstDayOfBitcoinPurchase}`);

    console.log(`Left money: ${totalIncome.toFixed(2)} lv.`);
}

// workForBitcoin([100, 200, 300]);
// workForBitcoin([50, 100]);
// workForBitcoin([3124.15, 504.212, 2511.124]);