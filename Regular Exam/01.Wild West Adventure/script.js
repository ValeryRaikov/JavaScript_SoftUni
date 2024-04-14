function solve(input) {
    const totalCharacters = Number(input.shift());

    let charactersTeam = {};

    for (let i = 0; i < totalCharacters; i++) {
        const [name, hp, bullets] = input[i].split(' ');

        charactersTeam[name] = {
            hp: Number(hp),
            bullets: Number(bullets),
        };
    }

    const commands = input.slice(totalCharacters, );

    let command = commands.shift();
    while (command !== 'Ride Off Into Sunset') {
        const [action, name, ...args] = command.split(' - ');

        switch (action) {
            case 'FireShot':
                const target = args[0];

                if (charactersTeam[name].bullets <= 0) {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
                } else {
                    charactersTeam[name].bullets--;
                    console.log(`${name} has successfully hit ${target} and now has ${charactersTeam[name].bullets} bullets!`);
                }

                break;
            case 'TakeHit':
                const damage = Number(args[0]);
                const attacker = args[1];

                charactersTeam[name].hp -= damage;

                if (charactersTeam[name].hp <= 0) {
                    delete charactersTeam[name];
                    console.log(`${name} was gunned down by ${attacker}!`);
                } else {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${charactersTeam[name].hp} HP!`);
                }

                break;
            case 'Reload':
                if (charactersTeam[name].bullets === 6) {
                    console.log(`${name}'s pistol is fully loaded!`);
                } else {
                    const bulletsToReload = 6 - charactersTeam[name].bullets;
                    charactersTeam[name].bullets = 6;
                    console.log(`${name} reloaded ${bulletsToReload} bullets!`);
                }

                break;
            case 'PatchUp':
                const amount = Number(args[0]);
            
                if (charactersTeam[name].hp === 100) {
                    console.log(`${name} is in full health!`);
                } else {
                    let healthToIncrease = 0;
                    if (charactersTeam[name].hp + amount > 100) {
                        healthToIncrease = 100 - charactersTeam[name].hp;
                    } else {
                        healthToIncrease = amount;
                    }
            
                    charactersTeam[name].hp = Math.min(100, charactersTeam[name].hp + healthToIncrease);
                    console.log(`${name} patched up and recovered ${healthToIncrease} HP!`);
                }
            
                break;
        }

        command = commands.shift();
    }

    Object.entries(charactersTeam).forEach(([name, info]) => {
        const { hp, bullets } = info;
        console.log(`${name}\n HP: ${hp}\n Bullets: ${bullets}`);
    })
}

/* solve([
    "2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset",
]); */

/* solve(([
    "2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20" ,
    "Reload - Jesse",
    "Ride Off Into Sunset"
])); */

solve(([
    "2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"
]));