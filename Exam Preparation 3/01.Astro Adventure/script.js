function solve(input) {
    const totalAstronauts = parseInt(input.shift());

    let astronautsTeam = {};

    for (let i = 0; i < totalAstronauts; i++) {
        const [astronautName, oxygenLevel, energyReserves] = input[i].split(' ');
        
        astronautsTeam[astronautName] = {
            'oxygenLevel': parseInt(oxygenLevel), 
            'energyReserves': parseInt(energyReserves), 
        };
    }

    const actionsMapper = {
        exploreFunc: (astronautName, energyNeeded) => {
            if (astronautsTeam[astronautName].energyReserves < energyNeeded) { 
                console.log(`${astronautName} does not have enough energy to explore!`);
            } else {
                astronautsTeam[astronautName].energyReserves -= energyNeeded;
                console.log(`${astronautName} has successfully explored a new area and now has ${astronautsTeam[astronautName].energyReserves} energy!`);
            }
        },

        refuelFunc: (astronautName, amount) => {
            astronautsTeam[astronautName].energyReserves = Math.min(astronautsTeam[astronautName].energyReserves + parseInt(amount), 200); 

            console.log(`${astronautName} refueled their energy by ${amount}!`);
        },
        breatheFunc: (astronautName, amount) => {
            astronautsTeam[astronautName].oxygenLevel = Math.min(astronautsTeam[astronautName].oxygenLevel + parseInt(amount), 100); 

            console.log(`${astronautName} took a breath and recovered ${amount} oxygen!`);
        },
    };

    const commands = input.slice(totalAstronauts, );
    
    let command = commands.shift();
    while (command !== 'End') {
        const [action, astronautName, arg] = command.split(' - ');

        switch (action) {
            case 'Explore':
                actionsMapper.exploreFunc(astronautName, parseInt(arg));
                break;
            case 'Refuel':
                actionsMapper.refuelFunc(astronautName, parseInt(arg)); 
                break;
            case 'Breathe':
                actionsMapper.breatheFunc(astronautName, parseInt(arg)); 
                break;
        }

        command = commands.shift();
    }

    Object.entries(astronautsTeam).forEach(([astronautName, astronautData]) => {
        const { oxygenLevel, energyReserves } = astronautData;
        console.log(`Astronaut: ${astronautName}, Oxygen: ${oxygenLevel}, Energy: ${energyReserves}`);
    });
    
}

/* solve([
    "3",
    "John 50 120",
    "Kate 80 180",
    "Rob 70 150",
    "Explore - John - 50",
    "Refuel - Kate - 30",
    "Breathe - Rob - 20",
    "End",
]);
*/