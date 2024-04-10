// 01 Easy solve
function solve(input) {
    const baristasCount = Number(input.shift());

    let baristaTeam = {};

    for (let i = 0; i < baristasCount; i++) {
        const [baristaName, shift, coffeeTypes] = input[i].split(' ');
        baristaTeam[baristaName] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        };
    }

    let i = baristasCount;
    let command = input[i];
    while (command !== 'Closed') {
        const [action, baristaName, ...args] = command.split(' / ');

        switch (action) {
            case 'Prepare':
                const shift = args[0];
                const coffeeType = args[1];

                if (baristaTeam[baristaName].shift === shift &&
                    baristaTeam[baristaName].coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }

                break;
            case 'Change Shift':
                const newShift = args[0];

                baristaTeam[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);

                break;
            case 'Learn':
                const newCoffeeType = args[0];

                if (baristaTeam[baristaName].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristaTeam[baristaName].coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }

                break;
        }

        i++;
        command = input[i];
    }
    
    for (const baristaName in baristaTeam) {
        const { shift, coffeeTypes } = baristaTeam[baristaName];
        console.log(`Barista: ${baristaName}, Shift: ${shift}, Drinks: ${coffeeTypes.join(', ')}`);
    }
}

// 02 Complex solve
function solve(input) {
    const baristasCount = Number(input[0]);
    const baristasData = input.slice(1, baristasCount + 1);
    const commands = input.slice(baristasCount + 1, input.length - 1);

    const baristaTeam = {};

    baristasData.forEach(data => {
        const [baristaName, shift, coffeeTypes] = data.split(' ');
        baristaTeam[baristaName] = { 
            shift, 
            coffeeTypes: coffeeTypes.split(','),
        };
    });

    commands.forEach(command => {
        const [action, baristaName, ...args] = command.split(' / ');
        
        switch (action) {
            case 'Prepare':
                const [shift, coffeeType] = args;
                if (baristaTeam[baristaName].shift === shift &&
                    baristaTeam[baristaName].coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                const newShift = args[0];
                baristaTeam[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                break;
            case 'Learn':
                const newCoffeeType = args[0];
                if (baristaTeam[baristaName].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristaTeam[baristaName].coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }
    });

    for (const [baristaName, { shift, coffeeTypes }] of Object.entries(baristaTeam)) {
        console.log(`Barista: ${baristaName}, Shift: ${shift}, Drinks: ${coffeeTypes.join(', ')}`);
    }
}

/* solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
]); */

/* solve([
    '4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino','Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed'
]); */