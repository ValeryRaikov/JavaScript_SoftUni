// 01
function calculateWash(commands) {
    let washPercentage = 0; 

    while (commands.length > 0) {
        const currCommand = commands.shift();

        switch (currCommand) {
            case 'soap':
                washPercentage += 10;
                break;
            case 'water':
                washPercentage *= 1.2;
                break;
            case 'vacuum cleaner':
                washPercentage *= 1.25;
                break;
            case 'mud':
                washPercentage *= 0.9;
                break;
        }
    }

    console.log(`The car is ${washPercentage.toFixed(2)}% clean.`);
}

// 02
function calculateWash(commands) {
    let washPercentage = 0; 

    const washer = {
        'soap': x => x + 10,
        'water': x => x * 1.2,
        'vacuum cleaner': x => x * 1.25,
        'mud': x => x * 0.9,
    }

    for (let command of commands) {
        washPercentage = washer[command](washPercentage);
    }

    console.log(`The car is ${washPercentage.toFixed(2)}% clean.`);
}

// calculateWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// calculateWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);