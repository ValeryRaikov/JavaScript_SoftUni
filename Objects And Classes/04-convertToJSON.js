// 01
function convertToJSON(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    };

    console.log(JSON.stringify(person));
}

convertToJSON('George', 'Jones', 'Brown');