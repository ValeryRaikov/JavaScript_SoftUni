function calculate(yield) {
    const CONSUMPTION = 26;

    let totalYield = 0;
    let days = 0;

    while (yield >= 100) {
        totalYield += yield - CONSUMPTION;
        days ++;
        yield -= 10;
    }

    if (totalYield >= CONSUMPTION)
        totalYield -= CONSUMPTION;
    else 
        totalYield = 0;

    console.log(days);
    console.log(totalYield);
}

// calculate(450);