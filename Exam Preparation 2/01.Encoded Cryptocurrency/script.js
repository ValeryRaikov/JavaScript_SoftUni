// 01 Not working in judge because of replaceAll() method
function solve(input) {
    let encodedMsg = input.shift();

    let cnt = 0;

    let command = input[cnt];
    while (command !== 'Buy') {
        let [action, ...args] = command.split('?');

        switch (action) {
            case 'TakeEven':
                encodedMsg = encodedMsg.split('').reduce((acc, char, idx) => {
                    if (idx % 2 === 0) {
                        return acc + char;
                    } else {
                        return acc;
                    }
                }, '');

                console.log(encodedMsg);

                break;
            case 'ChangeAll':
                const substring = args[0];
                const replacement = args[1];

                encodedMsg = encodedMsg.replaceAll(substring, replacement);

                console.log(encodedMsg);

                break;
            case 'Reverse':
                const substringToReverse = args[0];

                if (!encodedMsg.includes(substringToReverse)) {
                    console.log('error');
                } else {
                    const idx = encodedMsg.indexOf(substringToReverse);
                    const reversedSubstring = substringToReverse.split('').reverse().join('');
                    encodedMsg = encodedMsg.slice(0, idx) + encodedMsg.slice(idx + substringToReverse.length).concat(reversedSubstring);
                    console.log(encodedMsg);
                }

                break;
        }

        cnt++;
        command = input[cnt];
    }

    console.log(`The cryptocurrency is: ${encodedMsg}`);
}

// 02
function solve(input) {
    let encodedMsg = input.shift();

    let cnt = 0;

    let command = input[cnt];
    while (command !== 'Buy') {
        let [action, ...args] = command.split('?');

        switch (action) {
            case 'TakeEven':
                encodedMsg = encodedMsg.split('').filter((char, idx) => idx % 2 === 0).join('');
                console.log(encodedMsg);
                break;
            case 'ChangeAll':
                const [substring, replacement] = args;
                encodedMsg = encodedMsg.split(substring).join(replacement);
                console.log(encodedMsg);
                break;
            case 'Reverse':
                const substringToReverse = args[0];

                if (!encodedMsg.includes(substringToReverse)) {
                    console.log('error');
                } else {
                    const idx = encodedMsg.indexOf(substringToReverse);
                    const reversedSubstring = substringToReverse.split('').reverse().join('');
                    encodedMsg = encodedMsg.slice(0, idx) + encodedMsg.slice(idx + substringToReverse.length).concat(reversedSubstring);
                    console.log(encodedMsg);
                }
                break;
        }

        cnt++;
        command = input[cnt];
    }

    console.log(`The cryptocurrency is: ${encodedMsg}`);
}

/* solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy",
]);


solve([
    "PZDfA2PkAsakhnefZ7aZ", 
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"
]); */