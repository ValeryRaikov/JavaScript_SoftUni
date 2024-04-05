// 01
function sortNames(namesArr) {
    const sortedNames = namesArr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i+1}.${sortedNames[i]}`);
    }
}

// 02
function sortNames(namesArr) {
    const sortedNames = namesArr.sort((a, b) => a.localeCompare(b));

    let count = 1;
    for (let name of namesArr) {
        console.log(`${count++}.${name}`);
    }
}

// 03
function sortNames(namesArr) {
    const sortedNames = namesArr.sort((a, b) => a.localeCompare(b));

    sortedNames.forEach((name, index) => {
        console.log(`${index + 1}.${name} `);
    });
}

// sortNames(["John", "Bob", "Christina", "Ema"]);