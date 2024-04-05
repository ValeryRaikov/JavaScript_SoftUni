// 01
function operateHeroes(input) {
    let heroes = [];

    for (const row of input) {
        const [heroName, level, items] = row.split(' / ');

        heroes.push({
            heroName,
            level: Number(level),
            items,
        });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

// 02
function operateHeroes(input) {
    input
        .map(row => row.split(' / '))
        .map(([heroName, level, items]) => ({
                heroName,
                level: Number(level),
                items,
            }))
            .sort((a, b) => a.level - b.level)
            .forEach(hero => {
                console.log(`Hero: ${hero.name}`);
                console.log(`level => ${hero.level}`);
                console.log(`items => ${hero.items}`);
            });
}

/* operateHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]); */