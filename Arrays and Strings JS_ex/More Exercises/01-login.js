// 01
function logIn(passwords) {
    const username = passwords.shift();

    for (let i = 0; i < 4; i++) {
        const currentPass = passwords[i].split('').reverse().join('');

        if (username === currentPass) {
            return console.log(`User ${username} logged in.`);
        }

        if (i === 3) {
            return console.log(`User ${username} blocked!`);
        }

        console.log('Incorrect password. Try again.');
    }
}

// 02
function logIn(passwords) {
    const username = passwords.shift();
    const reversedUsername = username.split('').reverse().join('');

    let counter = 0;
    for (const password of passwords) {
        if (password === reversedUsername) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (counter === 3) {
            return console.log(`User ${username} blocked!`);
        }
        
        console.log('Incorrect password. Try again.');

        counter++;
    }
}


// logIn(['sunny','rainy','cloudy','sunny','not sunny']);