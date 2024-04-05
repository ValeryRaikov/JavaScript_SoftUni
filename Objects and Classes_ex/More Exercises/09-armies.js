// 01 (Not working properly)
function operateArmies(input) {
    const leaders = {};

    for (const line of input) {
        if (line.includes('arrives')) {
            const leader = line.split(' ')[0];
            leaders[leader] = { totalArmyCount: 0, armies: {} };
        } else if (line.includes('defeated')) {
            const leader = line.split(' ')[0];
            delete leaders[leader];
        } else if (line.includes(':')) {
            const [leader, armyData] = line.split(': ');
            const [armyName, armyCount] = armyData.split(', ');
            if (!leaders[leader]) {
                leaders[leader] = { totalArmyCount: 0, armies: {} };
            }
            leaders[leader].armies[armyName] = parseInt(armyCount);
            leaders[leader].totalArmyCount += parseInt(armyCount);
        } else if (line.includes('+')) {
            const [armyName, armyCount] = line.split(' + ');
            for (const leader in leaders) {
                if (leaders[leader].armies[armyName]) {
                    leaders[leader].armies[armyName] += parseInt(armyCount);
                    leaders[leader].totalArmyCount += parseInt(armyCount);
                }
            }
        }
    }

    const sortedLeaders = Object.entries(leaders)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    for (const [leader, armyData] of sortedLeaders) {
        console.log(`${leader}: ${armyData.totalArmyCount}`);
        const sortedArmies = Object.entries(armyData.armies)
            .sort((a, b) => b[1] - a[1]);
        for (const [army, count] of sortedArmies) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}

/* operateArmies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
operateArmies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']); */