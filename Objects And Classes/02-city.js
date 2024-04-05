// 01
function printCityData(cityObj) {
    for (const key in cityObj) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

// 02
function printCityData(cityObj) {
    for (const [key, value] of Object.entries(cityObj)) {
        console.log(`${key} -> ${value}`);
    }
}

// 03
function printCityData(cityObj) {
    const keys = Object.keys(cityObj);
    for (const key of keys) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

// 04
function printCityData(cityObj) {
    Object.entries(cityObj).forEach(([key, value]) => console.log(`${key} -> ${cityObj[key]}`));
}

/* printCityData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}); */