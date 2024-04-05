// 01
function printParking(input) {
    let parking = {};

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        (direction === 'IN') ? parking[carNumber] = true : delete parking[carNumber];
    }

    if (!parking) {
        return console.log('Parking Lot is Empty');
    }

    Object.keys(parking)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
}

// 02
function printParking(input) {
    let parking = {};

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        parking[carNumber] = direction === 'IN';
    }

    if (!parking) {
        return console.log('Parking Lot is Empty');
    }

    Object.entries(parking)
        .filter(([carNumber, parked]) => parked === true)
        .map(([carNumber]) => carNumber)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
}

// 03
function printParking(input) {
    const parking = new Set();

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        (direction === 'IN')
            ? parking.add(carNumber)
            : parking.delete(carNumber)
    }

    if (parking.size < 1) {
        return console.log('Parking Lot is Empty');
    }

    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

/* printParking([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
]); */