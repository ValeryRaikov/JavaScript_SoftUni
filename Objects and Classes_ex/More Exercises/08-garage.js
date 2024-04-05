// 01
function storeCars(input) {
    let garages = {};

    for (const entry of input) {
        const [garageNumber, carInfo] = entry.split(' - ');
        const carDetails = {};
        const pairs = carInfo.split(', ');

        for (const pair of pairs) {
            const [key, value] = pair.split(': ');
            carDetails[key.trim()] = value.trim();
        }

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        garages[garageNumber].push(carDetails);
    }

    for (const garageNumber in garages) {
        console.log(`Garage № ${garageNumber}`);
        for (const car of garages[garageNumber]) {
            const carDetails = [];
            for (const key in car) {
                carDetails.push(`${key} - ${car[key]}`);
            }
            console.log(`--- ${carDetails.join(', ')}`);
        }
    }
}

// 02
function storeCars(input) {
    let garages = {};

    for (const entry of input) {
        const [garageNumber, carInfo] = entry.split(' - ');

        const carDetails = carInfo.split(', ')
            .map(pair => pair.split(': '))
            .reduce((details, [key, value]) => {
                details[key.trim()] = value.trim();
                return details;
            }, {});

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        garages[garageNumber].push(carDetails);
    }

    for (const [garageNumber, cars] of Object.entries(garages)) {
        console.log(`Garage № ${garageNumber}`);
        for (const car of cars) {
            const carDetails = Object.entries(car).map(([key, value]) => `${key} - ${value}`).join(', ');
            console.log(`--- ${carDetails}`);
        }
    }
}

// storeCars(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);