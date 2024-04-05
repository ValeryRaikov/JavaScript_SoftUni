// 01
function convertJSON(JSONstring) {
    const object = JSON.parse(JSONstring);

    Object.entries(object).forEach(([key, value]) => console.log(`${key}: ${value}`));
}

// 01.1 (Almost the same)
function convertJSON(JSONstring) {
    const object = JSON.parse(JSONstring);

    Object.keys(object).forEach(key => console.log(`${key}: ${object[key]}`));
}

// 02
function convertJSON(JSONstring) {
    const object = JSON.parse(JSONstring);

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

// convertJSON('{"name": "George", "age": 40, "town": "Sofia"}');