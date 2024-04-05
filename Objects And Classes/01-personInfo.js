// 01
function printPerson(firstName, lastName, age) {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    return person;
}

// 02
function printPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
    };
}

// console.log(printPerson("Peter", "Pan","20"));