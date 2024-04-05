function calculatePrice(groupCount, groupType, dayWeek) {
    let singlePrice;
    let totalPrice;

    if (groupType == 'Students') {
        if (dayWeek == 'Friday') {
            singlePrice = 8.45;
        } else if (dayWeek == 'Saturday') {
            singlePrice = 9.8;
        } else if (dayWeek == 'Sunday') {
            singlePrice = 10.46;
        }

        if (groupCount >= 30) {
            totalPrice = singlePrice * groupCount * 0.85;
        } else {
            totalPrice = singlePrice * groupCount;
        }

    } else if (groupType == 'Business') {
        if (dayWeek == 'Friday') {
            singlePrice = 10.9;
        } else if (dayWeek == 'Saturday') {
            singlePrice = 15.6;
        } else if (dayWeek == 'Sunday') {
            singlePrice = 16;
        }

        if (groupCount >= 100) {
            totalPrice = singlePrice * (groupCount - 10);
        } else {
            totalPrice = singlePrice * groupCount;
        }

    } else if (groupType == 'Regular') {
        if (dayWeek == 'Friday') {
            singlePrice = 15;
        } else if (dayWeek == 'Saturday') {
            singlePrice = 20;
        } else if (dayWeek == 'Sunday') {
            singlePrice = 22.5;
        }

        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice = singlePrice * groupCount * 0.95;
        } else {
            totalPrice = singlePrice * groupCount;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

/* calculatePrice(30,
    "Students",
    "Sunday"); */

/* calculatePrice(40,
    "Regular",
    "Saturday"); */